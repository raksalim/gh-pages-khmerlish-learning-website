import DifficultyLevel, { DifficultySliderOption } from '@/components/DifficultyLevel';
import { WordPickerPlayButton } from '@/components/WordPickerPlayButton';
import { englishToKhmerWords, infiniteVerbsWords, nounsWords, subjectWords, verbsWords } from '@/data/khmerlish/DictOfWords';
import { arrWordsToLabels } from '@/utils/arrWordsToLabels';
import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';

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


    const [subjectValue, setSubjectValue] = useState<string>(subject.khmerLabels[0].value);
    const [verbValue, setVerbValue] = useState<string>(verb.khmerLabels[0].value);
    const [infiniteVerbValue, setInfiniteVerbValue] = useState<string>(infiniteVerb.khmerLabels[0].value);
    const [nounsValue, setNounsValue] = useState<string>(nouns.khmerLabels[0].value);

    const pickerValues = [subjectValue, verbValue, infiniteVerbValue, nounsValue];

    return <div className='container'>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '16px' }}>
            {difficultyLevel > 1 && <WordPickerPlayButton
                label="Subject"
                difficultyLevel={difficultyLevel}
                pickerValue={subjectValue}
                setPickerValue={setSubjectValue}
                pickerLabelsDict={subject}
                buttonLanguage="khmer"
                pickerLanguage="english"
            />}
            {difficultyLevel > 4 && <WordPickerPlayButton
                label="Verb"
                difficultyLevel={difficultyLevel}
                pickerValue={verbValue}
                setPickerValue={setVerbValue}
                pickerLabelsDict={verb}
                buttonLanguage="khmer"
                pickerLanguage="english"
            />
            }
            {difficultyLevel > 2 && <WordPickerPlayButton
                label={difficultyLevel > 4 ? "Infinite Verb" : 'Verb'}
                difficultyLevel={difficultyLevel}
                pickerValue={infiniteVerbValue}
                setPickerValue={setInfiniteVerbValue}
                pickerLabelsDict={infiniteVerb}
                buttonLanguage="khmer"
                pickerLanguage="english"

            />}
            {difficultyLevel > 3 && <WordPickerPlayButton
                label="Nouns"
                difficultyLevel={difficultyLevel}
                pickerValue={nounsValue}
                setPickerValue={setNounsValue}
                pickerLabelsDict={nouns}
                buttonLanguage="khmer"
                pickerLanguage="english"
            />}
        </div>

        {difficultyLevel > 2 && (<div style={{ width: '100%', marginTop: '5px' }}>

            <Button variant="outlined" color="primary" style={{ width: '100%', textTransform: 'none' }} className='clamp-size' >
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

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 16, marginTop: 'auto' }}>
            {/* Place your component here, e.g., a header or toolbar */}
            <DifficultyLevel difficultyScale={speakingPracticeDifficultyScale} setDifficultyLevel={setDifficultyLevel} />
        </div>

    </div >;
};

export default SpeakingPracticePage;