// import { useState } from "react"
import { khmerConsonantsAh, khmerConsonantsAll, khmerConsonantsForHair, khmerConsonantsWithHairIndexMapping, khmerConsonantsWithRatTeethIndexMapping } from "../data/khmer/khmerConsonant"
import VolumeMuteRoundedIcon from '@mui/icons-material/VolumeMuteRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import { Button } from "@mui/material"
import { useState } from "react";
import { khmerVowels, khmerVowelsThatDontChange } from "../data/khmer/khmerVowels";
import { khmerConsonantsForRatTeeth } from "../data/khmer/khmerConsonant";
import { s3BucketBaseUrl } from "@/data/const";
// import BackspaceIcon from '@mui/icons-material/Backspace';

export const KhmerWordPractice = () => {
    // const [isColorEnabled, setIsColorEnabled] = useState(true);
    const [consonent, setConsonent] = useState<string>('ក')
    const [jung, setJung] = useState<string>('')
    const [isConsonent, setIsConsonent] = useState<boolean>(true)
    const [vowel, setVowel] = useState<string>('ា')
    const [isAh, setIsAh] = useState<boolean>(true)
    const [fullWord, setFullWord] = useState<string>('')

    const s3LetterSoundBaseUrl = `${s3BucketBaseUrl}/sound/khmer`

    const setVowelColor = () =>
        isAh ? "primary" : "error"

    const setDisplayLetter = (letter: string) => {
        if (isConsonent) {
            return (letter === 'ឡ') ? letter : letter + "្" + letter
        }
        return "្" + letter
    }
    const formatIdx = (idx: number) => idx <= 9 ? `0${idx}` : `${idx}`;

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
                            z-index: 1000;
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
            <div className="flex-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "7px", maxWidth: "500px", marginBottom: "auto" }}>
                    {
                        khmerConsonantsAll.map((khmerConsonant, idx) =>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }} key={idx}>
                                <Button
                                    variant="outlined"
                                    color={khmerConsonantsAh.includes(khmerConsonant) ? "primary" : "error"}
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
                                        new Audio(`${s3LetterSoundBaseUrl}/consonants/c-${formatIdx(idx + 1)}.wav`).play();
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
                            const soundPath = `${s3LetterSoundBaseUrl}/consonants/teeth/teeth-${formatIdx(khmerConsonantsWithRatTeethIndexMapping[khmerConsonantsAll.indexOf(consonent)])}.wav`
                            new Audio(soundPath).play();
                            setIsAh(!isAh)
                        }}
                        disabled={!khmerConsonantsForRatTeeth.includes(consonent)}
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
                            const soundPath = `${s3LetterSoundBaseUrl}/consonants/hair/hair-${formatIdx(khmerConsonantsWithHairIndexMapping[khmerConsonantsAll.indexOf(consonent)])}.wav`
                            new Audio(soundPath).play();
                            setIsAh(!isAh)
                        }}
                        disabled={!khmerConsonantsForHair.includes(consonent)}
                    >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "20px" }}>
                            <span>៊</span>
                        </div>
                    </Button>

                    <Button
                        variant='outlined'
                        color='primary'
                        fullWidth
                        style={{ fontSize: "10px", marginLeft: 'auto', gridColumn: 'span 5' }}
                        onClick={() => {
                            setIsConsonent(!isConsonent)
                            setJung('')
                            if (isConsonent) { new Audio(`${s3LetterSoundBaseUrl}/jung.wav`).play() }
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
                                    fullWidth
                                    style={{ fontSize: "20px" }}
                                    onClick={() => {
                                        const soundPath = (isAh || khmerVowelsThatDontChange.includes(vowel))
                                            ? `${s3LetterSoundBaseUrl}/vowels-set-1/v1-${formatIdx(idx + 1)}.wav`
                                            : `${s3LetterSoundBaseUrl}/vowels-set-2/v2-${formatIdx(idx + 1)}.wav`
                                        setVowel(vowel);
                                        new Audio(soundPath).play();
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