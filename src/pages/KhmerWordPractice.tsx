// import { useState } from "react"
import { khmerConsonantsAh, khmerConsonantsAll } from "../data/letterConstants"
import VolumeMuteRoundedIcon from '@mui/icons-material/VolumeMuteRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import { Button } from "@mui/material"

export const KhmerWordPractice = () => {
    // const [consonent, setConsonent] = useState<string>('')
    // const [jung, setJung] = useState<string>('')
    // const [vowel, setVowel] = useState<string>('')

    // const vowels = "ាិីុូ".split("")


    return (
        <div style={{ width: 'auto' }}>
            {/* <h1>{consonent + jung + vowel}</h1> */}
            {/* <button onClick={() => { setConsonent("") }}>{"-"}</button>
            <button onClick={() => { setJung("") }}>{"-"}</button> */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "7px", maxWidth: "500px", margin: "auto" }}>
                {
                    khmerConsonantsAll.map((letter, idx) =>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }} key={idx}>
                            <Button
                                variant="outlined"
                                color={khmerConsonantsAh.includes(letter) ? "primary" : "error"}
                                fullWidth
                                style={{ fontSize: "20px" }}
                                // onClick={() => { setConsonent(letter); new Audio(`/sound/consonants/c-${idx + 1}.wav`).play() }}
                                onClick={() => { new Audio(`/sound/consonants/c-${idx + 1}.wav`).play() }}
                            >
                                {letter + "្" + letter}
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