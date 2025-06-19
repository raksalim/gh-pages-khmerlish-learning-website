import DifficultyLevel from '@/components/DifficultyLevel';
import React, { useState } from 'react';
import BasicSentencePractice from '@/components/BasicSentencePractice';
import { Box } from '@mui/material';
import { speakingPracticeDifficultyScale } from '@/data/lessonPlanConsts';

const SpeakingPracticePage: React.FC = () => {
    const [difficultyLevel, setDifficultyLevel] = useState<number>(0);

    const isAlphabetize = false;

    return (
        <div className='container'>
            <Box style={{ minHeight: 400 }}>
                <div
                    style={{
                        transition: 'opacity .3s',
                        opacity: difficultyLevel <= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Tutorial") ? 1 : 0,
                        height: difficultyLevel <= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Tutorial") ? 'auto' : 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    <h2 className='hanuman-title'>
                        Speaking Practice
                    </h2>
                </div>
                <BasicSentencePractice
                    difficultyLevel={difficultyLevel}
                    setDifficultyLevel={setDifficultyLevel}
                    speakingPracticeDifficultyScale={speakingPracticeDifficultyScale}
                    isAlphabetize={isAlphabetize}
                />
            </Box>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                {/* Place your component here, e.g., a header or toolbar */}
                <DifficultyLevel
                    difficultyScale={speakingPracticeDifficultyScale}
                    setScaleValue={setDifficultyLevel}
                    scaleValue={difficultyLevel}
                />
            </div>
            <div
                id="paypal-container-LUK4VKR8CTMYU"
                style={{
                    opacity: difficultyLevel >= 7 ? 1 : 0,
                    height: difficultyLevel >= 7 ? 'auto' : 0,
                    overflow: 'hidden',
                    transition: 'opacity 0.8s, width 0.5s',
                    width: '100%',
                    marginTop: '10vh',
                }}
            />
        </div>

    );
};

export default SpeakingPracticePage;