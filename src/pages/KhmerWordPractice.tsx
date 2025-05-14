// import { useState } from "react"
import { khmerConsonantsAh, khmerConsonantsAll } from "../data/khmer/khmerConstants"
import VolumeMuteRoundedIcon from '@mui/icons-material/VolumeMuteRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import { Button } from "@mui/material"
import { useState } from "react";
import { khmerVowels, khmerVowelsThatDontChange } from "../data/khmer/khmerVowels";

export const KhmerWordPractice = () => {
    // const [isColorEnabled, setIsColorEnabled] = useState(true);
    const [consonent, setConsonent] = useState<string>('ក')
    const [jung, setJung] = useState<string>('')
    const [isConsonent, setIsConsonent] = useState<boolean>(true)
    const [vowel, setVowel] = useState<string>('ា')
    const [isAh, setIsAh] = useState<boolean>(true)

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
                {`${jung === '' ? consonent : consonent + jung}  +  ${vowel} = ${(jung === '' ? consonent : consonent + jung) + vowel}`}
            </div>

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
                                        if (!isConsonent) {
                                            setJung("្" + khmerConsonant);
                                            setIsConsonent(true);
                                        }
                                        if (jung !== '') {
                                            setJung('');
                                        }
                                        if (isConsonent) {
                                            setConsonent(khmerConsonant);
                                            setIsAh(khmerConsonantsAh.includes(khmerConsonant));
                                        }
                                        new Audio(`/sound/khmer/consonants/c-${formatIdx(idx + 1)}.wav`).play()
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
                        style={{ fontSize: "10px", marginLeft: "auto", gridColumn: "span 2" }}
                        onClick={() => {
                            setIsConsonent(!isConsonent)
                            setJung('')
                            new Audio('/sound/khmer/jung.wav').play()
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <span style={{ border: "2px dotted", borderRadius: "50%", padding: "5px" }}></span>
                            <span>+</span>
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
                                        setVowel(vowel);
                                        const soundPath = (isAh || khmerVowelsThatDontChange.includes(vowel))
                                            ? `/sound/khmer/vowels-set-1/v1-${formatIdx(idx + 1)}.wav`
                                            : `/sound/khmer/vowels-set-2/v2-${formatIdx(idx + 1)}.wav`
                                        new Audio(soundPath).play()
                                    }}
                                >
                                    {vowel}
                                </Button>
                            </div>
                        )
                    }
                    <Button
                        variant='outlined'
                        color='primary'
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