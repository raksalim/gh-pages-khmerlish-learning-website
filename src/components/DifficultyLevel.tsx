import React from "react";
import Slider from "@mui/material/Slider";
import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export type DifficultySliderOption = {
    value: number;
    label: string;
};
type DifficultyLevelProps = {
    difficultyScale: DifficultySliderOption[];
    setScaleValue: (value: number) => void;
    scaleValue?: number;
}

const DifficultyLevel: React.FC<DifficultyLevelProps> = ({ difficultyScale, setScaleValue, scaleValue }) => {
    const valuetext = (value: number) => {
        return difficultyScale.find(option => option.value === value)?.label || '';
    }

    return (
        <Box sx={{ width: 250 }}>
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
                onChange={(_, newValue) => setScaleValue(newValue as number)}
                value={scaleValue ?? 0}
            />
        </Box>

    )
};

export default DifficultyLevel;