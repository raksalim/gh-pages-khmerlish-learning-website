import Fuse from "fuse.js";
import { CardDataType } from "../../data/types";

export const initFuseEngine = (initialSearchLisrOfObjects: CardDataType[]): Fuse<CardDataType> => {
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