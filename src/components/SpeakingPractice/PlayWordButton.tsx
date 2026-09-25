import { englishToKhmerWords } from '@/data/khmerlish/DictOfWords';
import { handlePlay, prepareWords } from '@/utils/handlePlay';
import { Button } from '@mui/material';
import React, { useEffect } from 'react';


type PlayWordButtonProps = {
    englishWord: string; // Dictionary key used to construct the audio URL
    displayWord?: string; // Optional display word, if different from englishWord
    isDisplayKhmerlish?: boolean; // Optional flag to display Khmerlish
}

export const PlayWordButton: React.FC<PlayWordButtonProps> = ({ englishWord, displayWord, isDisplayKhmerlish }) => {
    useEffect(() => {
        // Let wheel scrolling settle before requesting the selected clip.
        const timer = window.setTimeout(() => prepareWords([englishWord]), 250);
        return () => window.clearTimeout(timer);
    }, [englishWord]);

    return (
        <Button onClick={() => { handlePlay([englishWord]) }}
            variant="outlined"
            color="primary"
            style={{ width: '100%' }}
            disabled={!englishWord}
            sx={{ textTransform: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {displayWord || ' - '}
            {isDisplayKhmerlish && <span style={{ fontSize: '11px', color: 'gray' }} >
                {`${englishToKhmerWords[englishWord]?.khmerlish ? englishToKhmerWords[englishWord]?.khmerlish : ''} `}
            </span>}
        </Button>
    );
};
