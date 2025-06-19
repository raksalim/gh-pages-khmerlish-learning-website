import { handlePlay } from '@/utils/handlePlay';
import { Button } from '@mui/material';
import React from 'react';


type PlayWordButtonProps = {
    englishWord: string; // S3 URL to the audio file
    displayWord?: string; // Optional display word, if different from englishWord
}

export const PlayWordButton: React.FC<PlayWordButtonProps> = ({ englishWord, displayWord }) => {

    return (
        <Button onClick={() => { handlePlay([englishWord]) }} variant="outlined" color="primary" style={{ width: '100%' }} disabled={!englishWord} sx={{ textTransform: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {displayWord || ' - '}
        </Button>
    );
};

