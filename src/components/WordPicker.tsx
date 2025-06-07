import {
    WheelPicker,
    WheelPickerWrapper,
    type WheelPickerOption,
} from "@/components/wheel-picker";
import { englishToKhmerWords } from "@/data/khmerlish/DictOfWords";
import { infiniteVerbsWords, nounsWords, subjectWords, verbsWords } from "@/data/khmerlish/wordTypes";
import { arrWordsToLabels } from "@/utils/arrWordsToLabels";
import { useState } from "react";

const options: WheelPickerOption[] = [
    {
        label: "Next.js",
        value: "nextjs",
    },
    {
        label: "Vite",
        value: "vite",
    },
    // ...
];


export function WordPicker() {

    const subject = arrWordsToLabels(subjectWords);
    const verb = arrWordsToLabels(verbsWords)
    const infiniteVerb = arrWordsToLabels(infiniteVerbsWords);
    const nouns = arrWordsToLabels(nounsWords);

    const [subjectValue, setSubjectValue] = useState(subject.englishLabels[0].value);
    const [verbValue, setVerbValue] = useState(verb.englishLabels[0].value);
    const [infiniteVerbValue, setInfiniteVerbValue] = useState(infiniteVerb.englishLabels[0].value);
    const [nounsValue, setNounsValue] = useState(nouns.englishLabels[0].value);

    return (<>
        <WheelPickerWrapper>
            <WheelPicker options={subject.englishLabels} value={subjectValue} onValueChange={setSubjectValue} />
            <WheelPicker options={verb.englishLabels} value={verbValue} onValueChange={setVerbValue} />
            <WheelPicker options={infiniteVerb.englishLabels} value={infiniteVerbValue} onValueChange={setInfiniteVerbValue} />
            <WheelPicker options={nouns.englishLabels} value={nounsValue} onValueChange={setNounsValue} />
        </WheelPickerWrapper>
        <WheelPickerWrapper>
            <WheelPicker options={subject.khmerlishLabels} value={subjectValue} onValueChange={setSubjectValue} />
            <WheelPicker options={verb.khmerlishLabels} value={verbValue} onValueChange={setVerbValue} />
            <WheelPicker options={infiniteVerb.khmerlishLabels} value={infiniteVerbValue} onValueChange={setInfiniteVerbValue} />
            <WheelPicker options={nouns.khmerlishLabels} value={nounsValue} onValueChange={setNounsValue} />
        </WheelPickerWrapper>
        <WheelPickerWrapper>
            <WheelPicker options={subject.khmerLabels} value={subjectValue} onValueChange={setSubjectValue} />
            <WheelPicker options={verb.khmerLabels} value={verbValue} onValueChange={setVerbValue} />
            <WheelPicker options={infiniteVerb.khmerLabels} value={infiniteVerbValue} onValueChange={setInfiniteVerbValue} />
            <WheelPicker options={nouns.khmerLabels} value={nounsValue} onValueChange={setNounsValue} />
        </WheelPickerWrapper>
    </>
    );
}