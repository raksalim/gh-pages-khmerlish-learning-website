import {
    WheelPicker,
    WheelPickerWrapper,
} from "@/components/wheel-picker";
import { englishToKhmerWords, infiniteVerbsWords, nounsWords, subjectWords, verbsWords } from "@/data/khmerlish/DictOfWords";
import { arrWordsToLabels } from "@/utils/arrWordsToLabels";
import { useState } from "react";
import { PlayWordButton } from "./PlayWordButton";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import './WheelPicker.css'
import { Slider } from "@mui/material";

type WordPickerProps = {
    difficultyLevel: number;
};

export function WordPicker({ difficultyLevel }: WordPickerProps) {

    console.log(difficultyLevel)
    const subject = arrWordsToLabels(subjectWords);
    const verb = arrWordsToLabels(verbsWords, true);
    const infiniteVerb = arrWordsToLabels(infiniteVerbsWords, true);
    const nouns = arrWordsToLabels(nounsWords, true);

    const [subjectValue, setSubjectValue] = useState(subject.englishLabels[0].value);
    const [verbValue, setVerbValue] = useState(verb.englishLabels[0].value);
    const [infiniteVerbValue, setInfiniteVerbValue] = useState(infiniteVerb.englishLabels[0].value);
    const [nounsValue, setNounsValue] = useState(nouns.englishLabels[0].value);

    return (<>

        <WheelPickerWrapper className="wheel-picker-wrapper-custom">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: "40px"
                }}
            >
                <WheelPicker options={subject.englishLabels} value={subjectValue} onValueChange={setSubjectValue} />

                {difficultyLevel > 2 && <span
                    style={{
                        display: 'inline-block',
                        opacity: 0,
                        animation: 'fadeIn 1.2s ease-in forwards'
                    }}
                ><WheelPicker options={verb.englishLabels} value={verbValue} onValueChange={setVerbValue} />
                </span>}


                {difficultyLevel > 3 && <WheelPicker options={infiniteVerb.englishLabels} value={infiniteVerbValue} onValueChange={setInfiniteVerbValue} />}
                {difficultyLevel > 4 && <WheelPicker options={nouns.englishLabels} value={nounsValue} onValueChange={setNounsValue} />}
            </div>

        </WheelPickerWrapper>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: "50px"
            }}
        >
            <PlayWordButton englishWord={subjectValue} displayWord={englishToKhmerWords[subjectValue]?.khmer || ''} />
            <PlayWordButton englishWord={verbValue} displayWord={englishToKhmerWords[verbValue]?.khmer || ''} />
            <PlayWordButton englishWord={infiniteVerbValue} displayWord={englishToKhmerWords[infiniteVerbValue]?.khmer || ''} />
            <PlayWordButton englishWord={nounsValue} displayWord={englishToKhmerWords[nounsValue]?.khmer || ''} />
        </div>

    </>
    );
}