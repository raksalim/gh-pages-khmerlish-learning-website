import React from 'react'
import { useState } from 'react'
import LearnKhmerCard from '../components/LearnKhmerCard'


export type CardDataType = {
    title: string,
    description: string,
    pdfDownloadLink: string,
    youtubeVideoLink: string,
    // khmerLevel: number,
    // englishLevel: number
}

const cardsData: CardDataType[] = [
    {
        title: "Test Card",
        description: "test Description",
        pdfDownloadLink: "www.google.com",
        youtubeVideoLink: "https://www.youtube.com/embed/YqpvJjADVTw?si=jFkrQQZUc_MdLF82"
    },
    {
        title: "Sample Card 1",
        description: "Example Description 1",
        pdfDownloadLink: "www.example.com",
        youtubeVideoLink: "https://www.youtube.com/embed/YqpvJjADVTw?si=jFkrQQZUc_MdLF82"
    },
    {
        title: "Sample Card 2",
        description: "Example Description 2",
        pdfDownloadLink: "www.sample.com",
        youtubeVideoLink: "https://www.youtube.com/embed/YqpvJjADVTw?si=jFkrQQZUc_MdLF82"
    },
    {
        title: "Sample Card 3",
        description: "Example Description 3",
        pdfDownloadLink: "www.placeholder.com",
        youtubeVideoLink: "https://www.youtube.com/embed/YqpvJjADVTw?si=jFkrQQZUc_MdLF82"
    },
]

const cardData: CardDataType = {
    title: "Test Card",
    description: "test Description",
    pdfDownloadLink: "www.google.com",
    youtubeVideoLink: "https://www.youtube.com/embed/YqpvJjADVTw?si=jFkrQQZUc_MdLF82"
}

function LearnKhmer() {

    return (
        <>
            <h1>LearnKhmer Page</h1>

            {cardsData.map(cardData =>
                <LearnKhmerCard cardData={cardData}></LearnKhmerCard>
            )
            }

        </>
    )
}

export default LearnKhmer
