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
    const [vowel, setVowel] = useState<string>('ា')
    const [isAh, setIsAh] = useState<boolean>(true)

    const setVowelColor = () =>
        isAh ? "primary" : "error"


    return (
        <div style={{ maxWidth: '1130px', margin: 'auto' }}>
            <style>
                {`
                    @media (max-width: 1130px) {
                        .flex-container {
                            flex-direction: column;
                        }
                        .word-container {
                            position: sticky;
                            top: 0;
                            z-index: 1000;
                            padding: 10px;
                            background-color: white;
                            font-size: 25px;
                            margin: auto;
                            width: 100%;
                            text-align: center;
                            border-radius: 5px;
                            transition: all 0.3s ease;
                        }
                    }
                `}
            </style>


            <div className="word-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', fontSize: '25px', margin: 'auto' }}>
                {`${consonent}  +  ${vowel} = ${consonent + vowel}`}
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
                                    onClick={() => { setConsonent(khmerConsonant); setIsAh(khmerConsonantsAh.includes(khmerConsonant)); new Audio(`/sound/consonants/c-${idx + 1}.wav`).play() }}
                                // onClick={() => { new Audio(`/sound/consonants/c-${idx + 1}.wav`).play() }}
                                >
                                    {(khmerConsonant === 'ឡ') ? khmerConsonant : khmerConsonant + "្" + khmerConsonant}
                                </Button>
                            </div>
                        )
                    }
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
                                    onClick={() => { setVowel(vowel); new Audio(`/sound/consonants/c-${idx + 1}.wav`).play() }}
                                // onClick={() => { new Audio(`/sound/consonants/c-${idx + 1}.wav`).play() }}
                                >
                                    {vowel}
                                </Button>
                                {/* <Button variant="outlined"
                                style={{ width: "30px" }}
                                onClick={() => { setJung("្" + letter); new Audio(`/sound/consonants/c-${idx + 1}.wav`).play() }}
                            >
                                {"្" + letter}
                            </Button> */}
                            </div>
                        )
                    }
                </div>
            </div>

            <div style={{ textAlign: "center", fontSize: "14px", paddingTop: "30px" }}>
                <div style={{ textAlign: "center", fontSize: "14px", marginBottom: "30px" }}>
                    <VolumeMuteRoundedIcon style={{ fontSize: "30px" }} />
                    <VolumeDownRoundedIcon style={{ fontSize: "30px" }} />
                    <VolumeUpRoundedIcon style={{ fontSize: "30px" }} />
                </div>

                <p>Khmer Vowels Keyboard</p>
                <p>ABC's Keyboard</p>
                <p>Coming Soon</p>
            </div>
            {/* <button onClick={() => { setVowel("") }}>{"-"}</button> */}

            {/* {
                vowels.map((letter) =>
                    <button onClick={() => { setVowel(letter) }}>{letter}</button>
                )
            }
            <p>{`is "កា" === consonent + vowel៖ ${"កា" === consonent + vowel}`}</p> */}

        </div >
    )
}