import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { CardDataType } from '../pages/LearnKhmerPage';



export default function LearnKhmerCard({ cardData }: { cardData: CardDataType }) {

    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px', margin: '15px', borderRadius: '1px', width: '100%' }}>
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
                    <a href={cardData.pdfDownloadLink} target="_blank" download>
                        <Button>Download PDF</Button>
                    </a>
                </Box>
            </Box>
            <Box>
                <iframe width="500" height="315" src={cardData.youtubeEbeddedLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Box>
        </Card>
    );
}
