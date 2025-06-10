import DifficultyLevel, { DifficultySliderOption } from '@/components/DifficultyLevel';
import { WordPicker } from '@/components/WordPicker';
import { WordPickerPlayButton } from '@/components/WordPickerPlayButton';
import { infiniteVerbsWords, nounsWords, subjectWords, verbsWords } from '@/data/khmerlish/DictOfWords';
import { arrWordsToLabels } from '@/utils/arrWordsToLabels';
import React, { useState } from 'react';

const speakingPracticeDifficultyScale: DifficultySliderOption[] = [
    { value: 0, label: "Intro" },
    { value: 1, label: "Tutorial" },
    { value: 2, label: "Nouns" },
    { value: 3, label: "Verbs" },
    { value: 4, label: "Objects" },
    { value: 5, label: "Sentence" },
    { value: 6, label: "Khmerlish" },
    { value: 7, label: "Khmer" },
    { value: 8, label: "Practice" },
];

const SpeakingPracticePage: React.FC = () => {
    const [difficultyLevel, setDifficultyLevel] = useState<number>(0);

    console.log(difficultyLevel)
    const subject = arrWordsToLabels(subjectWords);
    const verb = arrWordsToLabels(verbsWords, true);
    const infiniteVerb = arrWordsToLabels(infiniteVerbsWords, true);
    const nouns = arrWordsToLabels(nounsWords, true);

    return <div >

        <DifficultyLevel difficultyScale={speakingPracticeDifficultyScale} setDifficultyLevel={setDifficultyLevel} />
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '16px' }}>
            <WordPickerPlayButton
                difficultyLevel={difficultyLevel}
                pickerLabelsDict={subject}
                buttonLanguage="khmer"
                pickerLanguage="english"
            />
            {difficultyLevel > 2 && <WordPickerPlayButton
                difficultyLevel={difficultyLevel}
                pickerLabelsDict={verb}
                buttonLanguage="khmer"
                pickerLanguage="english"
            />
            }
            {difficultyLevel > 3 && <WordPickerPlayButton
                difficultyLevel={difficultyLevel}
                pickerLabelsDict={infiniteVerb}
                buttonLanguage="khmer"
                pickerLanguage="english"
            />}
            {difficultyLevel > 4 && <WordPickerPlayButton
                difficultyLevel={difficultyLevel}
                pickerLabelsDict={nouns}
                buttonLanguage="khmer"
                pickerLanguage="english"
            />}
        </div>
    </div>;
};

export default SpeakingPracticePage;