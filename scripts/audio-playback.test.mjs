import assert from 'node:assert/strict';
import { test } from 'node:test';
import { playAudioSequence, prepareAudio } from '../src/utils/audioPlayback.ts';
import { handlePlay, prepareWords } from '../src/utils/handlePlay.ts';

class FakeAudio {
    static instances = [];
    src = '';
    currentTime = 0;
    error = null;
    onended = null;
    onerror = null;
    plays = 0;
    paused = true;
    rejection = null;
    constructor() { FakeAudio.instances.push(this); }
    play() {
        this.plays++;
        this.paused = false;
        return this.rejection ? Promise.reject(this.rejection) : Promise.resolve();
    }
    pause() { this.paused = true; }
    load() {}
    removeAttribute(name) { if (name === 'src') this.src = ''; }
}

globalThis.Audio = FakeAudio;
const connection = { saveData: false };
Object.defineProperty(globalThis, 'navigator', { value: { connection }, configurable: true });
const clip = url => FakeAudio.instances.findLast(audio => audio.src === url);
const tick = () => new Promise(resolve => setImmediate(resolve));

test('audio preparation and playback', async t => {
    await t.test('reuses prepared clips and starts playback synchronously', async () => {
        prepareAudio(['repeat']);
        const audio = clip('repeat');
        assert.equal(audio.plays, 0);
        const first = playAudioSequence(['repeat']);
        assert.equal(audio.plays, 1);
        audio.onended();
        await first;
        audio.currentTime = 3;
        const second = playAudioSequence(['repeat']);
        assert.equal(clip('repeat'), audio);
        assert.equal(audio.currentTime, 0);
        audio.onended();
        await second;
    });

    await t.test('loads ahead without playing clips out of order', async () => {
        const playback = playAudioSequence(['one', 'two', 'three', 'four']);
        assert.equal(clip('one').plays, 1);
        assert.equal(clip('two').plays, 0);
        assert.equal(clip('three').plays, 0);
        assert.equal(clip('four'), undefined);
        for (const url of ['one', 'two', 'three', 'four']) {
            assert.equal(clip(url).plays, 1);
            clip(url).onended();
            await tick();
        }
        await playback;
    });

    await t.test('a new tap cancels the old sentence, including a pending play promise', async () => {
        prepareAudio(['old']);
        let rejectOld;
        clip('old').play = () => new Promise((_, reject) => { rejectOld = reject; });
        const old = playAudioSequence(['old', 'obsolete']);
        const latest = playAudioSequence(['latest']);
        rejectOld(new DOMException('Interrupted', 'AbortError'));
        await old;
        await tick();
        assert.equal(clip('old').paused, true);
        assert.equal(clip('obsolete').plays, 0);
        assert.equal(clip('latest').paused, false);
        clip('latest').onended();
        await latest;
    });

    await t.test('skips failed files and retries them on a later tap', async () => {
        const playback = playAudioSequence(['missing', 'valid']);
        const failed = clip('missing');
        failed.error = { code: 4 };
        failed.onerror();
        await tick();
        assert.equal(clip('valid').plays, 1);
        clip('valid').onended();
        await playback;
        const retry = playAudioSequence(['missing']);
        assert.notEqual(clip('missing'), failed);
        clip('missing').onended();
        await retry;
    });

    await t.test('handles rejected playback without advancing a blocked sentence', async () => {
        prepareAudio(['blocked']);
        clip('blocked').rejection = new DOMException('Tap required', 'NotAllowedError');
        await playAudioSequence(['blocked', 'not-played']);
        assert.equal(clip('not-played').plays, 0);
        assert.equal(clip('blocked').paused, true);
    });

    await t.test('bounds the cache, releases evicted clips, and protects active playback', async () => {
        const playback = playAudioSequence(['protected']);
        for (let i = 0; i < 50; i++) prepareAudio([`cache-${i}`]);
        assert.ok(FakeAudio.instances.filter(audio => audio.src && !audio.error).length <= 24);
        assert.equal(clip('cache-0'), undefined);
        assert.equal(clip('protected').paused, false);
        clip('protected').onended();
        await playback;
    });

    await t.test('respects data saver while still allowing requested playback', async () => {
        connection.saveData = true;
        prepareAudio(['save-data']);
        assert.equal(clip('save-data'), undefined);
        const playback = playAudioSequence(['save-data', 'save-next']);
        assert.equal(clip('save-data').plays, 1);
        assert.equal(clip('save-next'), undefined);
        await playAudioSequence([]);
        await playback;
        connection.saveData = false;
    });

    await t.test('preserves S3 key encoding and skips empty picker selections', async () => {
        prepareWords(['', ' ', 'us/we', 'thank you']);
        const urls = FakeAudio.instances.filter(audio => audio.src).map(audio => audio.src);
        assert.ok(urls.some(url => url.endsWith('/us%3Awe.wav')));
        assert.ok(urls.some(url => url.endsWith('/thank+you.wav')));
        assert.ok(!urls.some(url => url.endsWith('/.wav') || url.endsWith('/+.wav')));
        handlePlay(['', 'thank you']);
        const audio = FakeAudio.instances.findLast(audio => audio.src.endsWith('/thank+you.wav'));
        assert.equal(audio.plays, 1);
        audio.onended();
        await tick();
    });
});
