import DifficultyLevel from '@/components/DifficultyLevel';
import React, { useState } from 'react';
import BasicSentencePractice from '@/components/SpeakingPractice/BasicSentencePractice';
import { Box } from '@mui/material';
import { speakingPracticeDifficultyScale } from '@/data/lessonPlanConsts';
import { Intro } from '@/components/SpeakingPractice/Intro';
import { Tutorial } from '@/components/SpeakingPractice/Tutorial';
import { SponsorButton } from '@/components/SpeakingPractice/SponsorButton';

const SpeakingPracticePage: React.FC = () => {
    const [difficultyLevel, setDifficultyLevel] = useState<number>(0);

    const isAlphabetize = false;

    return (
        <div className='container'>
            <Box style={{ minHeight: 400 }}>
                {difficultyLevel === speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Intro")
                    && <Intro />
                }
                {difficultyLevel === speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Tutorial")
                    && <Tutorial />
                }
                <BasicSentencePractice
                    difficultyLevel={difficultyLevel}
                    setDifficultyLevel={setDifficultyLevel}
                    speakingPracticeDifficultyScale={speakingPracticeDifficultyScale}
                    isAlphabetize={isAlphabetize}
                />
            </Box>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 'auto', marginBottom: 20 }}>
                {/* Place your component here, e.g., a header or toolbar */}
                <DifficultyLevel
                    difficultyScale={speakingPracticeDifficultyScale}
                    setScaleValue={setDifficultyLevel}
                    scaleValue={difficultyLevel}
                />
            </div>
            {difficultyLevel >= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Khmerlish") && <SponsorButton />}
        </div>
    );
};

export default SpeakingPracticePage;