import {
    WheelPicker,
    WheelPickerWrapper,
    type WheelPickerOption,
} from "@/components/wheel-picker";
import { englishToKhmerWords } from "@/data/khmerlish/DictOfWords";
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

const khmerSubjectWords: string[] = [
    "i",
    "you",
    "her",
    "him",
    "they",
    "them",
    "us"
];

export function WordPicker() {

    const subject = arrWordsToLabels(khmerSubjectWords);

    const [subjectOption, setSubjectOption] = useState("i");
    const [value2, setValue2] = useState("nextjs");
    const [value3, setValue3] = useState("nextjs");
    const [value4, setValue4] = useState("nextjs");

    return (<>
        <WheelPickerWrapper>
            <WheelPicker options={subject.englishLabels} value={subjectOption} onValueChange={setSubjectOption} />
            <WheelPicker options={options} value={value2} onValueChange={setValue2} />
            <WheelPicker options={options} value={value3} onValueChange={setValue3} />
            <WheelPicker options={options} value={value4} onValueChange={setValue4} />
        </WheelPickerWrapper>
        <WheelPickerWrapper>
            <WheelPicker options={subject.khmerlishLabels} value={subjectOption} onValueChange={setSubjectOption} />
            <WheelPicker options={options} value={value2} onValueChange={setValue2} />
            <WheelPicker options={options} value={value3} onValueChange={setValue3} />
            <WheelPicker options={options} value={value4} onValueChange={setValue4} />
        </WheelPickerWrapper>
        <WheelPickerWrapper>
            <WheelPicker options={subject.khmerLabels} value={subjectOption} onValueChange={setSubjectOption} />
            <WheelPicker options={options} value={value2} onValueChange={setValue2} />
            <WheelPicker options={options} value={value3} onValueChange={setValue3} />
            <WheelPicker options={options} value={value4} onValueChange={setValue4} />
        </WheelPickerWrapper>
    </>
    );
}