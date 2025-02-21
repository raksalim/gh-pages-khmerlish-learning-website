import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { CardDataType } from '../pages/LearnKhmerPage';



export default function LearnKhmerCard({ cardData }: { cardData: CardDataType }) {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px', margin: '15px', borderRadius: '1px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {cardData.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        {cardData.description}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    <a href="https://drive.google.com/uc?export=download&id=1uTh3DXyFdgvGAs6yIbHo1wMEl_-lnD9P" target="_blank" download>
                        <Button>Download PDF</Button>
                    </a>
                </Box>
            </Box>
            <iframe width="560" height="315" src={cardData.youtubeVideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen={true}></iframe>
        </Card>
    );
}
