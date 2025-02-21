export const tsvToJson = (csvString: string): object[] => {
    // Split the TSV string into lines
    const lines: string[] = csvString.trim().split("\n");

    // Extract the headers by splitting the first line by tab
    const headers: string[] = lines[0].split("\t");

    // Map over the remaining lines and convert them into objects
    const result: object[] = lines.slice(1).map(line => {
        const values: string[] = line.split("\t");
        return headers.reduce((obj: { [key: string]: string }, header: string, index: number) => {
            obj[header] = values[index];
            return obj;
        }, {});
    });

    return result
}