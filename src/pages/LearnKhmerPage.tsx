import { useEffect, useState } from 'react'
import LearnKhmerCard from '../components/LearnKhmerCard'
import { khmerVideosJson } from '../data/data'
import { Input } from '@mui/material'



// Fuse -------
import Fuse, { FuseResult } from 'fuse.js'

const initFuseEngine = (initialSearchLisrOfObjects: CardDataType[]): Fuse<CardDataType> => {
    const fuseOptions = {
        // isCaseSensitive: false,
        // includeScore: false,
        // ignoreDiacritics: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        threshold: 0.5,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
            "title",
            "description"
        ]
    };

    return new Fuse(initialSearchLisrOfObjects, fuseOptions);
}

// --------


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

    const [searchTerm, setSearchTerm] = useState<string>('')
    const [videosToDisplay, setVideosToDisplay] = useState<FuseResult<CardDataType>[]>([])

    const fuse = initFuseEngine(khmerVideosJson)

    useEffect(() => {
        setVideosToDisplay(fuse.search(searchTerm))
    }, [searchTerm])

    return (
        <>
            <p>LearnKhmer Page</p>
            <Input type="text" onChange={(e) => {
                setSearchTerm(e.target.value);
            }}></Input >
            {
                searchTerm ?
                    videosToDisplay.map((cardData, idx) =>
                        <LearnKhmerCard key={idx} cardData={cardData.item}></LearnKhmerCard>
                    ) :
                    khmerVideosJson.map((cardData, idx) =>
                        <LearnKhmerCard key={idx} cardData={cardData}></LearnKhmerCard>
                    )
            }
        </>
    )
}
