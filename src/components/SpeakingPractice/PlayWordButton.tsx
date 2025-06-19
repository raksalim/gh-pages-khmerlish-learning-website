import { englishToKhmerWords } from '@/data/khmerlish/DictOfWords';
import { handlePlay } from '@/utils/handlePlay';
import { Button } from '@mui/material';
import React from 'react';


type PlayWordButtonProps = {
    englishWord: string; // S3 URL to the audio file
    displayWord?: string; // Optional display word, if different from englishWord
    isDisplayKhmerlish?: boolean; // Optional flag to display Khmerlish
}

export const PlayWordButton: React.FC<PlayWordButtonProps> = ({ englishWord, displayWord, isDisplayKhmerlish }) => {

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

