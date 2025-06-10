import {
    WheelPicker,
    WheelPickerWrapper,
} from "@/components/wheel-picker";
import { englishToKhmerWords } from "@/data/khmerlish/DictOfWords";
import { LabelsDict } from "@/utils/arrWordsToLabels";
import { useState } from "react";
import { PlayWordButton } from "./PlayWordButton";
import './WheelPicker.css'
import { Box } from "@mui/material";

type WordPickerPlayButtonProps = {
    difficultyLevel: number;
    pickerLabelsDict: LabelsDict;
    buttonLanguage: 'english' | 'khmer' | 'khmerlish';
    pickerLanguage: 'english' | 'khmer' | 'khmerlish';
};

export function WordPickerPlayButton({ pickerLabelsDict, pickerLanguage = 'english', buttonLanguage = 'khmer' }: WordPickerPlayButtonProps) {

    const [pickerValue, setPickerValue] = useState(pickerLabelsDict.englishLabels[0].value);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', flex: 1 }}>
            <WheelPickerWrapper>
                <WheelPicker options={pickerLabelsDict[`${pickerLanguage}Labels`]} value={pickerValue} onValueChange={setPickerValue} />
            </WheelPickerWrapper>
            <PlayWordButton englishWord={pickerValue} displayWord={englishToKhmerWords[pickerValue]?.[buttonLanguage] || ''} />
        </div>
    );
}