import { Input } from "@mui/material";
import { khmerVideosJson } from "../../data/data";
import { useEffect } from "react";
import { FuseResult } from "fuse.js";
import { initFuseEngine } from "./fuseSearchEnginInit";
import { CardDataType } from "../../data/types";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';



const SearchBarOutline = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 5px 10px;
    margin-left: 30%;
    margin-right: 30%;
    border: solid 2px;
    border-radius: 30px;
`

const SearchBarContainer = styled.div`

`

export default function SearchBar({ searchTerm, setSearchTerm, setVideosToDisplay }:
    {
        searchTerm: string,
        setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
        setVideosToDisplay: React.Dispatch<React.SetStateAction<FuseResult<CardDataType>[]>>
    }
) {

    const fuse = initFuseEngine(khmerVideosJson)

    useEffect(() => {
        setVideosToDisplay(fuse.search(searchTerm))
    }, [searchTerm, setVideosToDisplay, fuse])


    return (
        <SearchBarContainer>
            <SearchBarOutline>
                <SearchIcon />
                <Input type="text" onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
                    style={{
                        width: '100%',
                    }}
                    placeholder={'Search'}
                    disableUnderline
                />
            </SearchBarOutline>
        </SearchBarContainer>
    )
}