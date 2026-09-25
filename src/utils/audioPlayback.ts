// Retain only a small working set of clips, never the whole dictionary.
const MAX_CACHED_CLIPS = 24;
const clips = new Map<string, HTMLAudioElement>();
let activeAudio: HTMLAudioElement | undefined;
let cancelPlayback: (() => void) | undefined;
let playbackId = 0;

function releaseClip(audio: HTMLAudioElement): void {
	audio.pause();
	audio.removeAttribute('src');
	audio.load();
}

function getClip(url: string): HTMLAudioElement {
	let audio = clips.get(url);
	if (audio?.error) {
		clips.delete(url);
		releaseClip(audio);
		audio = undefined;
	}
	if (!audio) {
		audio = new Audio();
		audio.preload = 'auto';
		audio.src = url;
	}
	// Refresh insertion order so the least recently used idle clip is evicted.
	clips.delete(url);
	clips.set(url, audio);
	for (const [key, clip] of clips) {
		if (clips.size <= MAX_CACHED_CLIPS) break;
		if (clip === activeAudio) continue;
		clips.delete(key);
		releaseClip(clip);
	}
	return audio;
}

export function prepareAudio(urls: string[]): void {
	const connection = (navigator as Navigator & {
		connection?: { saveData?: boolean };
	}).connection;
	if (connection?.saveData) return;
	for (const url of new Set(urls.slice(0, MAX_CACHED_CLIPS))) {
		if (url) getClip(url);
	}
}

function playClip(audio: HTMLAudioElement): Promise<boolean> {
	return new Promise((resolve) => {
		let finished = false;
		const finish = (continueSequence: boolean) => {
			if (finished) return;
			finished = true;
			audio.onended = null;
			audio.onerror = null;
			audio.pause();
			activeAudio = undefined;
			cancelPlayback = undefined;
			resolve(continueSequence);
		};
		activeAudio = audio;
		cancelPlayback = () => finish(false);
		audio.onended = () => finish(true);
		audio.onerror = () => finish(true);
		try {
			audio.currentTime = 0;
			// Call play synchronously during the tap to preserve user activation.
			void audio.play().catch((error: unknown) => {
				const blocked = error instanceof DOMException && error.name === 'NotAllowedError';
				finish(!blocked);
			});
		} catch {
			finish(false);
		}
	});
}

export async function playAudioSequence(urls: string[]): Promise<void> {
	const id = ++playbackId;
	cancelPlayback?.();
	const queue = urls.filter(Boolean);
	for (let index = 0; index < queue.length; index++) {
		if (id !== playbackId) return;
		const completion = playClip(getClip(queue[index]));
		// Start the requested clip first, then prepare at most two upcoming clips.
		prepareAudio(queue.slice(index + 1, index + 3));
		if (!await completion) return;
	}
}
