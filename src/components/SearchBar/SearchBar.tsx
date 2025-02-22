import { Input } from "@mui/material";
import { khmerVideosJson } from "../../data/data";
import { useEffect  } from "react";
import { FuseResult } from "fuse.js";
import { initFuseEngine } from "./fuseSearchEnginInit";
import { CardDataType } from "../../data/types";


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
    }, [searchTerm, fuse, setVideosToDisplay])


    return (
        <Input type="text" onChange={(e) => {
            setSearchTerm(e.target.value);
        }} />
    )
}