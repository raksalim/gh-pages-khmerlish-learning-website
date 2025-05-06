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
            <button onClick={() => { setConsonent("") }}>{"-"}</button>
            <button onClick={() => { setJung("") }}>{"-"}</button>
            {
                khmerConsonantsAll.map((letter, idx) =>
                    <div>
                        <button onClick={() => new Audio(`/sound/consonants/c-${idx + 1}.wav`).play()}>{letter}</button>
                        <button onClick={() => { setConsonent(letter) }}>{letter}</button>
                        <button onClick={() => { setJung("្" + letter) }}>{"្" + letter}</button>
                    </div>

                )
            }
            <button onClick={() => { setVowel("") }}>{"-"}</button>

            {
                vowels.map((letter) =>
                    <button onClick={() => { setVowel(letter) }}>{letter}</button>
                )
            }
            <p>{`is "កា" === consonent + vowel៖ ${"កា" === consonent + vowel}`}</p>
        </>
    )
}