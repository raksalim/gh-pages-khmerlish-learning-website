import {
    WheelPicker,
    WheelPickerWrapper,
    type WheelPickerOption,
} from "@/components/wheel-picker";
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

const khmerSubjectOptions: WheelPickerOption[] = [
    { label: "ខ្ញុំ", value: "I, me" },
    { label: "អ្នក", value: "you" },
    { label: "នាង", value: "her" },
    { label: "គាត់", value: "him" },
    { label: "ពួកគេ", value: "they" },
    { label: "ពួកគេ", value: "them" },
    { label: "ពួកយើង", value: "us" },
];
const englishSubjectOptions: WheelPickerOption[] = [
    { label: "I, me", value: "I, me" },
    { label: "you", value: "you" },
    { label: "her", value: "her" },
    { label: "him", value: "him" },
    { label: "they", value: "they" },
    { label: "them", value: "them" },
    { label: "us", value: "us" },
];
const khmerlishSubjectOptions: WheelPickerOption[] = [
    { label: "khnhom", value: "I, me" },
    { label: "anak", value: "you" },
    { label: "neang", value: "her" },
    { label: "koat", value: "him" },
    { label: "puok-ke", value: "they" },
    { label: "puok-ke", value: "them" },
    { label: "puok-yeung", value: "us" },
];


export function WheelPickerDemo() {
    const [value1, setValue1] = useState("khnhom");
    const [value2, setValue2] = useState("nextjs");
    const [value3, setValue3] = useState("nextjs");
    const [value4, setValue4] = useState("nextjs");
    const [value5, setValue5] = useState("nextjs");

    return (<>
        <WheelPickerWrapper>
            <WheelPicker options={englishSubjectOptions} value={value1} onValueChange={setValue1} />
            <WheelPicker options={options} value={value2} onValueChange={setValue2} />
            <WheelPicker options={options} value={value3} onValueChange={setValue3} />
            <WheelPicker options={options} value={value4} onValueChange={setValue4} />
            <WheelPicker options={options} value={value5} onValueChange={setValue5} />
        </WheelPickerWrapper>
        <WheelPickerWrapper>
            <WheelPicker options={khmerlishSubjectOptions} value={value1} onValueChange={setValue1} />
            <WheelPicker options={options} value={value2} onValueChange={setValue2} />
            <WheelPicker options={options} value={value3} onValueChange={setValue3} />
            <WheelPicker options={options} value={value4} onValueChange={setValue4} />
            <WheelPicker options={options} value={value5} onValueChange={setValue5} />
        </WheelPickerWrapper>
        <WheelPickerWrapper>
            <WheelPicker options={khmerSubjectOptions} value={value1} onValueChange={setValue1} />
            <WheelPicker options={options} value={value2} onValueChange={setValue2} />
            <WheelPicker options={options} value={value3} onValueChange={setValue3} />
            <WheelPicker options={options} value={value4} onValueChange={setValue4} />
            <WheelPicker options={options} value={value5} onValueChange={setValue5} />
        </WheelPickerWrapper>
    </>
    );
}