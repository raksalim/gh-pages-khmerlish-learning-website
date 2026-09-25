import { khmerConsonantsAh, khmerConsonantsAll, khmerConsonantsForHair, khmerConsonantsWithHairIndexMapping, khmerConsonantsWithRatTeethIndexMapping } from "../data/khmer/khmerConsonant"
import VolumeMuteRoundedIcon from '@mui/icons-material/VolumeMuteRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import { Button } from "@mui/material"
import { useEffect, useRef, useState } from "react";
import { khmerVowels, khmerVowelsThatDontChange } from "../data/khmer/khmerVowels";
import { khmerConsonantsForRatTeeth } from "../data/khmer/khmerConsonant";
import { s3BucketBaseUrl } from "@/data/const";
import { playAudioSequence, prepareAudio } from "@/utils/audioPlayback";
import { prepareVisibleAudio } from "@/utils/prepareVisibleAudio";

const s3LetterSoundBaseUrl = `${s3BucketBaseUrl}/sound/khmer`;
const formatIdx = (idx: number) => String(idx).padStart(2, "0");
const consonantSoundUrls = khmerConsonantsAll.map((_, idx) =>
    `${s3LetterSoundBaseUrl}/consonants/c-${formatIdx(idx + 1)}.wav`);

export const KhmerWordPractice = () => {
    // const [isColorEnabled, setIsColorEnabled] = useState(true);
    const [consonent, setConsonent] = useState<string>('ក')
    const [jung, setJung] = useState<string>('')
    const [isConsonent, setIsConsonent] = useState<boolean>(true)
    const [vowel, setVowel] = useState<string>('ា')
    const [isAh, setIsAh] = useState<boolean>(true)
    const [fullWord, setFullWord] = useState<string>('')

    const keyboardRef = useRef<HTMLDivElement>(null);
    const consonantIndex = khmerConsonantsAll.indexOf(consonent);
    const teethSoundUrl = khmerConsonantsForRatTeeth.includes(consonent)
        ? `${s3LetterSoundBaseUrl}/consonants/teeth/teeth-${formatIdx(khmerConsonantsWithRatTeethIndexMapping[consonantIndex])}.wav`
        : undefined;
    const hairSoundUrl = khmerConsonantsForHair.includes(consonent)
        ? `${s3LetterSoundBaseUrl}/consonants/hair/hair-${formatIdx(khmerConsonantsWithHairIndexMapping[consonantIndex])}.wav`
        : undefined;
    const vowelSoundUrls = khmerVowels.map((letter, idx) =>
        (isAh || khmerVowelsThatDontChange.includes(letter))
            ? `${s3LetterSoundBaseUrl}/vowels-set-1/v1-${formatIdx(idx + 1)}.wav`
            : `${s3LetterSoundBaseUrl}/vowels-set-2/v2-${formatIdx(idx + 1)}.wav`);

    useEffect(() => {
        if (keyboardRef.current) return prepareVisibleAudio(keyboardRef.current);
    }, [isAh, consonent, isConsonent]);

    const prepareTarget = (target: EventTarget) => {
        if (!(target instanceof Element)) return;
        const button = target.closest<HTMLButtonElement>('button[data-audio-url]');
        if (button?.dataset.audioUrl && !button.disabled) prepareAudio([button.dataset.audioUrl]);
    };

    const setVowelColor = () =>
        isAh ? "primary" : "error"

    const setDisplayLetter = (letter: string) => {
        if (isConsonent) {
            return (letter === 'ឡ') ? letter : letter + "្" + letter
        }
        return "្" + letter
    }

    return (
        <div style={{ maxWidth: '1130px', margin: 'auto' }}>
            <style>
                {`
                    @media (max-width: 1130px) {
                        .flex-container {
                            flex-direction: column;
                            padding-top: 5px;
                        }
                        .word-container {
                            position: sticky;
                            top: 0;
                            z-index: 1;
                            padding: 10px;
                            background-color: white;
                            font-size: 50px;
                            margin: auto;
                            width: 100%;
                            text-align: center;
                            border-radius: 5px;
                            transition: all 0.3s ease;
                        }
                    }
                `}
            </style>
            <div
                style={{
                    transition: 'opacity .3s',
                    opacity: 0.8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <h2 className='hanuman-title'>
                    Reading Practice
                </h2>
            </div>
            <div className="word-container"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', fontSize: '25px', margin: 'auto' }}>
                {`${jung === '' ? consonent : consonent + jung}  +  ${vowel ? vowel : "---"} = ${(jung === '' ? consonent : consonent + jung) + vowel}`}
            </div>
            {/* <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            ><div>

                    {fullWord}
                </div>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        setFullWord(fullWord.slice(0, -1));
                    }}
                >
                    <BackspaceIcon />
                </Button>
            </div> */}
            <div ref={keyboardRef}
                onPointerDownCapture={event => prepareTarget(event.target)}
                onFocusCapture={event => prepareTarget(event.target)}
                className="flex-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "7px", maxWidth: "500px", marginBottom: "auto" }}>
                    {
                        khmerConsonantsAll.map((khmerConsonant, idx) =>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }} key={idx}>
                                <Button
                                    variant="outlined"
                                    color={khmerConsonantsAh.includes(khmerConsonant) ? "primary" : "error"}
                                    data-audio-url={consonantSoundUrls[idx]}
                                    fullWidth
                                    style={{ fontSize: "20px" }}
                                    onClick={() => {
                                        if (isConsonent) {
                                            setConsonent(khmerConsonant);
                                            setJung('')
                                            setVowel('')
                                            setFullWord(fullWord + khmerConsonant);
                                            setIsAh(khmerConsonantsAh.includes(khmerConsonant));
                                        } else {
                                            setJung("្" + khmerConsonant);
                                            setFullWord(fullWord + "្" + khmerConsonant);
                                            setIsConsonent(true);
                                        };
                                        void playAudioSequence([consonantSoundUrls[idx]]);
                                    }}
                                >
                                    {setDisplayLetter(khmerConsonant)}
                                </Button>
                            </div>
                        )
                    }
                    <Button
                        variant='outlined'
                        color='primary'
                        fullWidth
                        style={{ fontSize: "10px" }}
                        onClick={() => {
                            setConsonent(consonent + '៉')
                            setFullWord(fullWord + '៉');
                            if (teethSoundUrl) void playAudioSequence([teethSoundUrl]);
                            setIsAh(!isAh)
                        }}
                        data-audio-url={teethSoundUrl}
                        disabled={!teethSoundUrl}
                    >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "20px" }}>
                            <span>៉</span>
                        </div>
                    </Button>
                    <Button
                        variant='outlined'
                        color='error'
                        fullWidth
                        style={{ fontSize: "10px" }}
                        onClick={() => {
                            setConsonent(consonent + '៊')
                            setFullWord(fullWord + '៊');
                            if (hairSoundUrl) void playAudioSequence([hairSoundUrl]);
                            setIsAh(!isAh)
                        }}
                        data-audio-url={hairSoundUrl}
                        disabled={!hairSoundUrl}
                    >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "20px" }}>
                            <span>៊</span>
                        </div>
                    </Button>

                    <Button
                        variant='outlined'
                        color='primary'
                        fullWidth
                        data-audio-url={isConsonent ? `${s3LetterSoundBaseUrl}/jung.wav` : undefined}
                        style={{ fontSize: "10px", marginLeft: 'auto', gridColumn: 'span 5' }}
                        onClick={() => {
                            setIsConsonent(!isConsonent)
                            setJung('')
                            if (isConsonent) { void playAudioSequence([`${s3LetterSoundBaseUrl}/jung.wav`]) }
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "20px" }}>
                            <span>្</span>
                        </div>
                    </Button>
                </div>
                <div style={{ width: '100px', height: '50px' }} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "7px", maxWidth: "500px", marginBottom: "auto" }}>
                    {
                        khmerVowels.map((vowel, idx) =>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }} key={idx}>
                                <Button
                                    variant='outlined'
                                    color={khmerVowelsThatDontChange.includes(vowel) ? 'success' : setVowelColor()}
                                    data-audio-url={vowelSoundUrls[idx]}
                                    fullWidth
                                    style={{ fontSize: "20px" }}
                                    onClick={() => {
                                        const soundPath = vowelSoundUrls[idx];
                                        setVowel(vowel);
                                        void playAudioSequence([soundPath]);
                                        setFullWord(fullWord + vowel);
                                    }}
                                >
                                    {vowel}
                                </Button>
                            </div>
                        )
                    }
                    <Button
                        variant='outlined'
                        color={isAh ? "error" : "primary"}
                        fullWidth
                        style={{ fontSize: "15px", marginLeft: "auto", gridColumn: "span 2" }}
                        onClick={() => {
                            setConsonent(!isAh ? 'ក' : 'គ')
                            setIsAh(!isAh)
                        }}
                    >
                        {"< - >"}
                    </Button>
                </div>

            </div>

            <div style={{ textAlign: "center", fontSize: "14px", paddingTop: "30px" }}>
                <div style={{ textAlign: "center", fontSize: "14px", marginBottom: "30px" }}>
                    <VolumeMuteRoundedIcon style={{ fontSize: "30px" }} />
                    <VolumeDownRoundedIcon style={{ fontSize: "30px" }} />
                    <VolumeUpRoundedIcon style={{ fontSize: "30px" }} />
                </div>

                <p>Khmer Independent Vowels</p>
                <p>ABC's Keyboard</p>
                <p>Coming Soon</p>
            </div>
        </div >
    )
}