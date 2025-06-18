import { DifficultySliderOption } from '@/components/DifficultyLevel';
import { WordPickerPlayButton } from '@/components/WordPickerPlayButton';
import { englishToKhmerWords, infiniteVerbsWords, nounsWords, subjectWords, verbsWords } from '@/data/khmerlish/DictOfWords';
import { arrWordsToLabels } from '@/utils/arrWordsToLabels';
import React, { useEffect, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Button } from '@mui/material';
import { KhmerOrEnglishButton } from './KhmerOrEnglishButton';
import SponsorKhmerlishButton from './SponsorKhmerlishButton';

type languageOptions = 'english' | 'khmer' | 'khmerlish';
type LevelSetting = {
    pickerLanguage: languageOptions;
    buttonLanguage: languageOptions;
};

const levelsSettings: Record<string, LevelSetting> = {
    Intro: {
        pickerLanguage: "english",
        buttonLanguage: "khmer"
    },
    Tutorial: {
        pickerLanguage: "english",
        buttonLanguage: "khmer"
    },
    ['Common Phrases']: {
        pickerLanguage: "english",
        buttonLanguage: "khmer"
    },
    Subject: {
        pickerLanguage: "english",
        buttonLanguage: "khmerlish"
    },
    Verbs: {
        pickerLanguage: "english",
        buttonLanguage: "khmerlish"
    },
    Objects: {
        pickerLanguage: "english",
        buttonLanguage: "khmerlish"
    },
    Sentence: {
        pickerLanguage: "english",
        buttonLanguage: "khmerlish"
    },
    Khmerlish: {
        pickerLanguage: "khmer",
        buttonLanguage: "english"
    },
    Khmer: {
        pickerLanguage: "khmer",
        buttonLanguage: "khmer"
    },
    Practice: {
        pickerLanguage: "khmer",
        buttonLanguage: "khmer"
    },
    ['Extra Practice']: {
        pickerLanguage: "khmer",
        buttonLanguage: "khmer"
    },
};

export const speakingPracticeDifficultyScale: DifficultySliderOption[] = Object.keys(levelsSettings).map((label, value) => ({
    value,
    label,
}));

type BasicSentencePracticeProps = {
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
    const [isKhmerSwitch, setIsKhmerSwitch] = useState<boolean>(true);

    const subject = arrWordsToLabels(subjectWords);
    const verb = arrWordsToLabels(verbsWords, isAlphabetize);
    const infiniteVerb = arrWordsToLabels(infiniteVerbsWords, isAlphabetize);
    const nouns = arrWordsToLabels(nounsWords, isAlphabetize);


    const [subjectValue, setSubjectValue] = useState<string>(subject.khmerLabels[0].value);
    const [verbValue, setVerbValue] = useState<string>(verb.khmerLabels[0].value);
    const [infiniteVerbValue, setInfiniteVerbValue] = useState<string>(infiniteVerb.khmerLabels[0].value);
    const [nounsValue, setNounsValue] = useState<string>(nouns.khmerLabels[0].value);

    const [pickerLanguage, setPickerLanguage] = useState<languageOptions>('english');
    const [buttonLanguage, setButtonLanguage] = useState<languageOptions>('khmer');

    const pickerValues = [subjectValue, verbValue, infiniteVerbValue, nounsValue];

    useEffect(() => {
        if (difficultyLevel <= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Practice")) {
            setIsKhmerSwitch(true)
        }
        setPickerLanguage(levelsSettings[speakingPracticeDifficultyScale[difficultyLevel].label].pickerLanguage);
        setButtonLanguage(levelsSettings[speakingPracticeDifficultyScale[difficultyLevel].label].buttonLanguage);
    }, [difficultyLevel]);

    return (
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '16px' }}>
                {/* {difficultyLevel === speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Common Phrases") && <WordPickerPlayButton
                    label="Subject"
                    difficultyLevel={difficultyLevel}
                    pickerValue={subjectValue}
                    setPickerValue={setSubjectValue}
                    pickerLabelsDict={subject}
                    pickerLanguage={isKhmerSwitch ? pickerLanguage : 'english'}
                    buttonLanguage={buttonLanguage}
                />} */}
                {difficultyLevel >= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Subject") && <WordPickerPlayButton
                    label="Subject"
                    difficultyLevel={difficultyLevel}
                    pickerValue={subjectValue}
                    setPickerValue={setSubjectValue}
                    pickerLabelsDict={subject}
                    pickerLanguage={isKhmerSwitch ? pickerLanguage : 'english'}
                    buttonLanguage={buttonLanguage}
                />}
                {difficultyLevel >= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Extra Practice") && <WordPickerPlayButton
                    label="Verb"
                    difficultyLevel={difficultyLevel}
                    pickerValue={verbValue}
                    setPickerValue={setVerbValue}
                    pickerLabelsDict={verb}
                    pickerLanguage={isKhmerSwitch ? pickerLanguage : 'english'}
                    buttonLanguage={buttonLanguage}
                />
                }
                {difficultyLevel >= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Verbs") && <WordPickerPlayButton
                    label={difficultyLevel > 4 ? "Infinite Verb" : 'Verb'}
                    difficultyLevel={difficultyLevel}
                    pickerValue={infiniteVerbValue}
                    setPickerValue={setInfiniteVerbValue}
                    pickerLabelsDict={infiniteVerb}
                    pickerLanguage={isKhmerSwitch ? pickerLanguage : 'english'}
                    buttonLanguage={buttonLanguage}

                />}
                {difficultyLevel >= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Objects") && <WordPickerPlayButton
                    label="Nouns"
                    difficultyLevel={difficultyLevel}
                    pickerValue={nounsValue}
                    setPickerValue={setNounsValue}
                    pickerLabelsDict={nouns}
                    pickerLanguage={isKhmerSwitch ? pickerLanguage : 'english'}
                    buttonLanguage={buttonLanguage}
                />}
            </div>

            {difficultyLevel >= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Subject") && (<div style={{ width: '100%', marginTop: '5px' }}>
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
                            {pickerValues.map((value, idx) => (
                                <span key={idx}>{englishToKhmerWords[value]?.khmer}</span>
                            ))}
                        </div>
                        <div>
                            {pickerValues.map((value, idx) => (
                                <span key={idx} style={{ fontSize: '11px', color: 'gray' }} >
                                    {`${englishToKhmerWords[value]?.khmerlish ? englishToKhmerWords[value]?.khmerlish : ''} `}
                                </span>
                            ))}
                        </div>
                    </div>
                </Button>
            </div>)
            }
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
                marginTop: '10px',
                width: '100%',
            }}>
                {difficultyLevel >= speakingPracticeDifficultyScale.findIndex(opt => opt.label === "Practice")
                    && <KhmerOrEnglishButton
                        checked={isKhmerSwitch}
                        onChange={() => { setIsKhmerSwitch(!isKhmerSwitch); console.log(isKhmerSwitch) }}
                    />}
            </div>
        </div >

    )
};

export default BasicSentencePractice;