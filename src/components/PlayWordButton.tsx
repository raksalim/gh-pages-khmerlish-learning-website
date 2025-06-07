import { s3BucketBaseUrl } from '@/data/const';
import { Button } from '@mui/material';
import React, { useRef } from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';


type PlayWordButtonProps = {
    englishWord: string; // S3 URL to the audio file
    isKhmer?: boolean;
    playbackSpeed?: number; // Optional playback speed, default is 1
}

export const PlayWordButton: React.FC<PlayWordButtonProps> = ({ englishWord, isKhmer = false, playbackSpeed = 1 }) => {
    const s3WordBaseUrl = `${s3BucketBaseUrl}/sound/words`;

    const audioUrl = `${s3WordBaseUrl}/${isKhmer ? 'khmer' : 'english'}/${englishWord}.wav`; // Replace with your actual audio URL logic
    const tempUrl = `https://khmerlish-read-aloud-app.s3.us-east-1.amazonaws.com/sound/khmer/jung.wav`; // Replace with your actual audio URL logic

    const handlePlay = () => {
        console.log(englishWord, audioUrl)
        const audio = new Audio(tempUrl || audioUrl);
        audio.playbackRate = playbackSpeed;
        audio.play();
        return;
    };

    return (
        <Button onClick={handlePlay} style={{ width: '100%', padding: 'auto' }}>
            <MusicNoteIcon />
        </Button>
    );
};

