import { useState } from 'react'
import LearnKhmerCard from '../components/LearnKhmerCard'
import { khmerVideosJson } from '../data/data'
import { FuseResult } from 'fuse.js'
import SearchBar from '../components/SearchBar/SearchBar'
import { CardDataType } from '../data/types'
import { Container, Typography } from '@mui/material'
import { lightGreen } from '@mui/material/colors'

export default function LearnKhmer() {

    const [searchTerm, setSearchTerm] = useState<string>('')
    const [videosToDisplay, setVideosToDisplay] = useState<FuseResult<CardDataType>[]>([])

    return (
        <Container maxWidth='lg'>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setVideosToDisplay={setVideosToDisplay}
            />
            {
                searchTerm ?
                    videosToDisplay.map((cardData, idx) =>
                        <LearnKhmerCard key={idx} cardData={cardData.item}></LearnKhmerCard>
                    ) :
                    khmerVideosJson.map((cardData, idx) =>
                        <LearnKhmerCard key={idx} cardData={cardData}></LearnKhmerCard>
                    )
            }
        </Container >
    )
}
