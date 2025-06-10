import {
    WheelPicker,
    WheelPickerWrapper,
} from "@/components/wheel-picker";
import { englishToKhmerWords } from "@/data/khmerlish/DictOfWords";
import { LabelsDict } from "@/utils/arrWordsToLabels";
import { useState } from "react";
import { PlayWordButton } from "./PlayWordButton";
import './WheelPickerPlayButton.css'

type WordPickerPlayButtonProps = {
    difficultyLevel: number;
    pickerLabelsDict: LabelsDict;
    buttonLanguage: 'english' | 'khmer' | 'khmerlish';
    pickerLanguage: 'english' | 'khmer' | 'khmerlish';
    className?: string;
};

export function WordPickerPlayButton({ pickerLabelsDict, pickerLanguage = 'english', buttonLanguage = 'khmer', className }: WordPickerPlayButtonProps) {

    const [pickerValue, setPickerValue] = useState(pickerLabelsDict.englishLabels[0].value);

    return (
        <div
            className={`wheel-picker-wrapper-custom ${className}`}
        >
            <WheelPickerWrapper>
                <WheelPicker options={pickerLabelsDict[`${pickerLanguage}Labels`]} value={pickerValue} onValueChange={setPickerValue} />
            </WheelPickerWrapper>
            <PlayWordButton englishWord={pickerValue} displayWord={englishToKhmerWords[pickerValue]?.[buttonLanguage] || ''} />
        </div>
    );
}