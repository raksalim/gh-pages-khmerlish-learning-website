import {
    WheelPicker,
    WheelPickerWrapper,
} from "@/components/SpeakingPractice/wheel-picker";
import { englishToKhmerWords } from "@/data/khmerlish/DictOfWords";
import { LabelsDict } from "@/utils/arrWordsToLabels";
import { PlayWordButton } from "./PlayWordButton";
import './WheelPickerPlayButton.css'

type WordPickerPlayButtonProps = {
    label?: string;
    difficultyLevel: number;
    pickerValue: string;
    setPickerValue: (value: string) => void;
    pickerLabelsDict: LabelsDict;
    buttonLanguage: 'english' | 'khmer' | 'khmerlish';
    pickerLanguage: 'english' | 'khmer' | 'khmerlish';
    className?: string;
};

export function WordPickerPlayButton({ label, pickerLabelsDict, pickerValue, setPickerValue, pickerLanguage = 'english', buttonLanguage = 'khmer', className }: WordPickerPlayButtonProps) {

    return (
        <div
            className={`wheel-picker-wrapper-custom ${className}`}
        >
            {label && 
            <div>
                <span className="clamp-size hanuman-body">
                    {label}
                </span>
            </div>}
            <WheelPickerWrapper>
                <WheelPicker options={pickerLabelsDict[`${pickerLanguage}Labels`]} value={pickerValue} onValueChange={setPickerValue} />
            </WheelPickerWrapper>
            <PlayWordButton englishWord={pickerValue} displayWord={englishToKhmerWords[pickerValue]?.[buttonLanguage] || ''} />
        </div>
    );
}