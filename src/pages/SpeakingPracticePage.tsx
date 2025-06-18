import DifficultyLevel, { DifficultySliderOption } from '@/components/DifficultyLevel';
import { WordPickerPlayButton } from '@/components/WordPickerPlayButton';
import { englishToKhmerWords, infiniteVerbsWords, nounsWords, subjectWords, verbsWords } from '@/data/khmerlish/DictOfWords';
import { arrWordsToLabels } from '@/utils/arrWordsToLabels';
import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Button } from '@mui/material';
import BasicSentencePractice from '@/components/BasicSentencePractice';

const speakingPracticeDifficultyScale: DifficultySliderOption[] = [
    { value: 0, label: "Intro" },
    { value: 1, label: "Tutorial" },
    { value: 2, label: "Subject" },
    { value: 3, label: "Verbs" },
    { value: 4, label: "Objects" },
    { value: 5, label: "Sentence" },
    { value: 6, label: "Khmerlish" },
    { value: 7, label: "Khmer" },
    { value: 8, label: "Practice" },
];

const SpeakingPracticePage: React.FC = () => {
    const [difficultyLevel, setDifficultyLevel] = useState<number>(0);

    const [isAlphabetize, setIsAlphabetize] = useState<boolean>(false);

    return (
        <div className='container'>
            <BasicSentencePractice
                difficultyLevel={difficultyLevel}
                setDifficultyLevel={setDifficultyLevel}
                speakingPracticeDifficultyScale={speakingPracticeDifficultyScale}
                isAlphabetize={isAlphabetize}
            />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                {/* Place your component here, e.g., a header or toolbar */}
                <DifficultyLevel
                    difficultyScale={speakingPracticeDifficultyScale}
                    setScaleValue={setDifficultyLevel}
                    scaleValue={difficultyLevel}
                />
            </div>
        </div>
    );
};

export default SpeakingPracticePage;