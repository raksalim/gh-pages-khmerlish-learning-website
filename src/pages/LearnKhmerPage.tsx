import React, { useEffect, useState } from 'react'
import LearnKhmerCard from '../components/LearnKhmerCard'
import { khmerVideosJson } from '../data/data'


export type CardDataType = {
    title: string,
    description: string,
    pdfDownloadLink: string,
    youtubeLink: string,
    youtubeEbeddedLink: string,
    datePublished: string,
    googleDriveLink: string
    // khmerLevel: number,
    // englishLevel: number
}

export default function LearnKhmer() {

    const [videosToDisplay, setVideosToDisplay] = useState<CardDataType[]>([])

    useEffect(() => {
        setVideosToDisplay(khmerVideosJson)
    }, [khmerVideosJson])

    return (
        <>
            <p>LearnKhmer Page</p>
            {
                videosToDisplay.map((cardData, idx) =>
                    <LearnKhmerCard key={idx} cardData={cardData}></LearnKhmerCard>
                )
            }
        </>
    )
}
