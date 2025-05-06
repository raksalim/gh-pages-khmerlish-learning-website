import { useState } from "react"
import { khmerConsonantsAll } from "../data/letterConstants"

export const KhmerWordPractice = () => {
    const [consonent, setConsonent] = useState<string>('')
    const [jung, setJung] = useState<string>('')
    const [vowel, setVowel] = useState<string>('')

    const vowels = "ាិីុូ".split("")


    return (
        <>
            <h1>{consonent + jung + vowel}</h1>
            <button onClick={(e) => { setConsonent("") }}>{"-"}</button>
            <button onClick={(e) => { setJung("") }}>{"-"}</button>
            {
                khmerConsonantsAll.map((letter, idx) =>
                    <div>
                        <button onClick={() => new Audio(`/sound/consonants/c-${idx + 1}.wav`).play()}>{letter}</button>
                        {/* <button onClick={(e) => { setConsonent(letter) }}>{letter}</button>
                        <button onClick={(e) => { setJung("្" + letter) }}>{"្" + letter}</button> */}
                    </div>

                )
            }
            <button onClick={(e) => { setVowel("") }}>{"-"}</button>

            {
                vowels.map((letter) =>
                    <button onClick={(e) => { setVowel(letter) }}>{letter}</button>
                )
            }
            <p>{`is "កា" === consonent + vowel៖ ${"កា" === consonent + vowel}`}</p>
        </>
    )
}