import DifficultyLevel from '@/components/DifficultyLevel';
import React, { useState } from 'react';
import BasicSentencePractice from '@/components/BasicSentencePractice';
import { Box } from '@mui/material';
import { speakingPracticeDifficultyScale } from '@/data/lessonPlanConsts';
import SponsorKhmerlishButton from '@/components/SponsorKhmerlishButton';
import khmerlishLogo from '/logo/Khmerlish_Transparent.png';


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
            <SponsorKhmerlishButton isShowing={difficultyLevel >= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Khmerlish")} />
        </div>
    );
};

export default SpeakingPracticePage;