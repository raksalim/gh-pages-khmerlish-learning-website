import React from "react";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";


export type DifficultySliderOption = {
    value: number;
    label: string;
};
type DifficultyLevelProps = {
    difficultyScale: DifficultySliderOption[];
    setDifficultyLevel: (value: number) => void;
}

const DifficultyLevel: React.FC<DifficultyLevelProps> = ({ difficultyScale, setDifficultyLevel }) => {
    const valuetext = (value: number) => {
        return difficultyScale.find(option => option.value === value)?.label || '';
    }

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Difficulty Level"
                valueLabelFormat={valuetext}
                defaultValue={0}
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                marks={difficultyScale.map(option => ({
                    value: option.value,
                    label: option.value + 1
                })) || []}
                max={(difficultyScale.length ?? 1) - 1}
                onChange={(_, newValue) => setDifficultyLevel(newValue as number)}
            />
        </Box>
    )
};

export default DifficultyLevel;