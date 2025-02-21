import React from 'react'
import { useState } from 'react'
import LearnKhmerCard from '../components/LearnKhmerCard'
import { tsvToJson } from '../utls/tsvToJson'
import { khmerVideosTsv } from '../data/data'


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

function LearnKhmer() {
    const cardsData: CardDataType[] = tsvToJson(khmerVideosTsv) as CardDataType[]

    return (
        <>
            <h1>LearnKhmer Page</h1>

            {cardsData.map((cardData, idx) =>
                <LearnKhmerCard key={idx} cardData={cardData}></LearnKhmerCard>
            )
            }

        </>
    )
}

export default LearnKhmer
