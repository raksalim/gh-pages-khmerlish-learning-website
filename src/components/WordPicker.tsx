import {
    WheelPicker,
    WheelPickerWrapper,
} from "@/components/wheel-picker";
import { infiniteVerbsWords, nounsWords, subjectWords, verbsWords } from "@/data/khmerlish/DictOfWords";
import { arrWordsToLabels } from "@/utils/arrWordsToLabels";
import { Button } from "@mui/material";
import { useState } from "react";
import { PlayWordButton } from "./PlayWordButton";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export function WordPicker() {
    const [isShowKhmerlish, setIsShowKhmerlish] = useState(false);

    const subject = arrWordsToLabels(subjectWords);
    const verb = arrWordsToLabels(verbsWords, true);
    const infiniteVerb = arrWordsToLabels(infiniteVerbsWords, true);
    const nouns = arrWordsToLabels(nounsWords, true);

    const [subjectValue, setSubjectValue] = useState(subject.englishLabels[0].value);
    const [verbValue, setVerbValue] = useState(verb.englishLabels[0].value);
    const [infiniteVerbValue, setInfiniteVerbValue] = useState(infiniteVerb.englishLabels[0].value);
    const [nounsValue, setNounsValue] = useState(nouns.englishLabels[0].value);


    const pickers = [subject, verb, infiniteVerb, nouns];

    return (<>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
            <FormControlLabel
                control={
                    <Switch
                        checked={isShowKhmerlish}
                        onChange={() => setIsShowKhmerlish(!isShowKhmerlish)}
                        color="primary"
                    />
                }
                label="Khmerlish"
            />
        </div>
        <WheelPickerWrapper>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplateRows: "repeat(2, auto)",
                    gap: "16px",
                    width: "100%",
                }}
            >
                <WheelPicker options={subject.englishLabels} value={subjectValue} onValueChange={setSubjectValue} />
                <WheelPicker options={verb.englishLabels} value={verbValue} onValueChange={setVerbValue} />
                <WheelPicker options={infiniteVerb.englishLabels} value={infiniteVerbValue} onValueChange={setInfiniteVerbValue} />
                <WheelPicker options={nouns.englishLabels} value={nounsValue} onValueChange={setNounsValue} />

                <PlayWordButton englishWord={subjectValue} />
                <PlayWordButton englishWord={verbValue} />
                <PlayWordButton englishWord={infiniteVerbValue} />
                <PlayWordButton englishWord={nounsValue} />
            </div>
        </WheelPickerWrapper>

        {isShowKhmerlish && <WheelPickerWrapper>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplateRows: "repeat(2, auto)",
                    gap: "16px",
                    width: "100%",
                }}
            >
                <WheelPicker options={subject.khmerlishLabels} value={subjectValue} onValueChange={setSubjectValue} />
                <WheelPicker options={verb.khmerlishLabels} value={verbValue} onValueChange={setVerbValue} />
                <WheelPicker options={infiniteVerb.khmerlishLabels} value={infiniteVerbValue} onValueChange={setInfiniteVerbValue} />
                <WheelPicker options={nouns.khmerlishLabels} value={nounsValue} onValueChange={setNounsValue} />

                <PlayWordButton englishWord={subjectValue} />
                <PlayWordButton englishWord={verbValue} />
                <PlayWordButton englishWord={infiniteVerbValue} />
                <PlayWordButton englishWord={nounsValue} />
            </div>
        </WheelPickerWrapper>}

        <WheelPickerWrapper>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplateRows: "repeat(2, auto)",
                    gap: "16px",
                    width: "100%",
                }}
            >
                <WheelPicker options={subject.khmerLabels} value={subjectValue} onValueChange={setSubjectValue} />
                <WheelPicker options={verb.khmerLabels} value={verbValue} onValueChange={setVerbValue} />
                <WheelPicker options={infiniteVerb.khmerLabels} value={infiniteVerbValue} onValueChange={setInfiniteVerbValue} />
                <WheelPicker options={nouns.khmerLabels} value={nounsValue} onValueChange={setNounsValue} />

                <PlayWordButton englishWord={subjectValue} isKhmer />
                <PlayWordButton englishWord={verbValue} isKhmer />
                <PlayWordButton englishWord={infiniteVerbValue} isKhmer />
                <PlayWordButton englishWord={nounsValue} isKhmer />
            </div>
        </WheelPickerWrapper>
    </>
    );
}