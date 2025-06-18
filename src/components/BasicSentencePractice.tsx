import DifficultyLevel, { DifficultySliderOption } from '@/components/DifficultyLevel';
import { WordPickerPlayButton } from '@/components/WordPickerPlayButton';
import { englishToKhmerWords, infiniteVerbsWords, nounsWords, subjectWords, verbsWords } from '@/data/khmerlish/DictOfWords';
import { arrWordsToLabels } from '@/utils/arrWordsToLabels';
import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Button } from '@mui/material';
import { KhmerOrEnglishButton } from './KhmerOrEnglishButton';
import { lightBlue } from '@mui/material/colors';

interface BasicSentencePracticeProps {
    difficultyLevel: number;
    setDifficultyLevel: React.Dispatch<React.SetStateAction<number>>;
    speakingPracticeDifficultyScale: DifficultySliderOption[];
    isAlphabetize?: boolean;
}

const BasicSentencePractice: React.FC<BasicSentencePracticeProps> = ({
    difficultyLevel,
    speakingPracticeDifficultyScale,
    isAlphabetize = false
}) => {
    const subject = arrWordsToLabels(subjectWords);
    const verb = arrWordsToLabels(verbsWords, isAlphabetize);
    const infiniteVerb = arrWordsToLabels(infiniteVerbsWords, isAlphabetize);
    const nouns = arrWordsToLabels(nounsWords, isAlphabetize);


    const [subjectValue, setSubjectValue] = useState<string>(subject.khmerLabels[0].value);
    const [verbValue, setVerbValue] = useState<string>(verb.khmerLabels[0].value);
    const [infiniteVerbValue, setInfiniteVerbValue] = useState<string>(infiniteVerb.khmerLabels[0].value);
    const [nounsValue, setNounsValue] = useState<string>(nouns.khmerLabels[0].value);

    const pickerValues = [subjectValue, verbValue, infiniteVerbValue, nounsValue];

    return <div className='container'>
        {/* <Box display="flex" alignItems="center" mb={2}>
            <span style={{ marginRight: 8 }}>Alphabetize</span>
            <Button
                variant={isAlphabetize ? "contained" : "outlined"}
                color="primary"
                size="small"
                onClick={() => {
                    // This component does not control isAlphabetize, so you may want to lift state up if needed.
                    // If you want to control it here, add setIsAlphabetize to props and call it here.
                }}
                disabled
                style={{ minWidth: 40 }}
            >
                {isAlphabetize ? "On" : "Off"}
            </Button>
        </Box> */}
        <KhmerOrEnglishButton />
        <Box style={{ minHeight: 400 }}>
            <div
                style={{
                    transition: 'opacity 0.5s',
                    opacity: difficultyLevel > speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Tutorial") ? 0 : 1,
                    pointerEvents: difficultyLevel > speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Subject") ? 'none' : 'auto',
                }}
            >
                <h1 style={{
                    textAlign: 'center',
                    margin: 5,
                    fontWeight: 500,
                    fontSize: '2.2rem',
                    letterSpacing: '0.01em'
                }} className='hanuman-title'>
                    Speaking Practice
                </h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '16px' }}>
                {difficultyLevel >= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Subject") && <WordPickerPlayButton
                    label="Subject"
                    difficultyLevel={difficultyLevel}
                    pickerValue={subjectValue}
                    setPickerValue={setSubjectValue}
                    pickerLabelsDict={subject}
                    buttonLanguage="khmer"
                    pickerLanguage="english"
                />}
                {difficultyLevel >= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Sentence") && <WordPickerPlayButton
                    label="Verb"
                    difficultyLevel={difficultyLevel}
                    pickerValue={verbValue}
                    setPickerValue={setVerbValue}
                    pickerLabelsDict={verb}
                    buttonLanguage="khmer"
                    pickerLanguage="english"
                />
                }
                {difficultyLevel >= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Verbs") && <WordPickerPlayButton
                    label={difficultyLevel > 4 ? "Infinite Verb" : 'Verb'}
                    difficultyLevel={difficultyLevel}
                    pickerValue={infiniteVerbValue}
                    setPickerValue={setInfiniteVerbValue}
                    pickerLabelsDict={infiniteVerb}
                    buttonLanguage="khmer"
                    pickerLanguage="english"

                />}
                {difficultyLevel >= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Objects") && <WordPickerPlayButton
                    label="Nouns"
                    difficultyLevel={difficultyLevel}
                    pickerValue={nounsValue}
                    setPickerValue={setNounsValue}
                    pickerLabelsDict={nouns}
                    buttonLanguage="khmer"
                    pickerLanguage="english"
                />}
            </div>

            {difficultyLevel > speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Tutorial") && (<div style={{ width: '100%', marginTop: '5px' }}>
                <Button
                    variant="outlined"
                    color="primary"
                    style={{
                        width: '100%',
                        textTransform: 'none',
                        animation: 'fadeIn 0.7s',
                        animationDelay: '0.5s',
                        animationFillMode: 'both'
                    }}
                    className='clamp-size'
                >
                    <PlayArrowIcon />
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div>
                            {pickerValues.map((value) => (
                                <span key={value}>{englishToKhmerWords[value]?.khmer}</span>
                            ))}
                        </div>
                        <div>
                            {pickerValues.map((value) => (
                                <span key={value} style={{ fontSize: '11px', color: 'gray' }} >
                                    {`${englishToKhmerWords[value]?.khmerlish ? englishToKhmerWords[value]?.khmerlish : ''} `}
                                </span>
                            ))}
                        </div>
                    </div>
                </Button>
            </div>)
            }
        </Box>
    </div >;
};

export default BasicSentencePractice;