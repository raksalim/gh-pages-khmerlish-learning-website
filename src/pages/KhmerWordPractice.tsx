// import { useState } from "react"
import { khmerConsonantsAll } from "../data/letterConstants"
import { Button } from "@mui/material"

export const KhmerWordPractice = () => {
    // const [consonent, setConsonent] = useState<string>('')
    // const [jung, setJung] = useState<string>('')
    // const [vowel, setVowel] = useState<string>('')

    // const vowels = "ាិីុូ".split("")


    return (
        <>
            {/* <h1>{consonent + jung + vowel}</h1> */}
            {/* <button onClick={() => { setConsonent("") }}>{"-"}</button>
            <button onClick={() => { setJung("") }}>{"-"}</button> */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
                {
                    khmerConsonantsAll.map((letter, idx) =>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }} key={idx}>
                            <Button variant="outlined"
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
            {/* <button onClick={() => { setVowel("") }}>{"-"}</button> */}

            {/* {
                vowels.map((letter) =>
                    <button onClick={() => { setVowel(letter) }}>{letter}</button>
                )
            }
            <p>{`is "កា" === consonent + vowel៖ ${"កា" === consonent + vowel}`}</p> */}
        </>
    )
}