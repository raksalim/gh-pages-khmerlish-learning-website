import DifficultyLevel from '@/components/DifficultyLevel';
import React, { useState } from 'react';
import BasicSentencePractice, { speakingPracticeDifficultyScale } from '@/components/BasicSentencePractice';

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
            <div
                id="paypal-container-LUK4VKR8CTMYU"
                style={{
                    opacity: difficultyLevel >= 3 ? 1 : 0,
                    height: difficultyLevel >= 3 ? 'auto' : 0,
                    overflow: 'hidden',
                    transition: 'opacity 0.8s, width 0.5s'
                }}
            />

        </div>

    );
};

export default SpeakingPracticePage;