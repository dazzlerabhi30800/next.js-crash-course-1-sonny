
type PageProps = {
    params: {
        searchTerm: string,
    }
}

type SearchResult = {
    organic_results: [
        {
            position: number,
            title: string,
            link: string,
            thumbnail: string,
            snippet: string,
        }
    ]
}

const handleSearch = async (searchTerm: string) => {
    const res = await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`)


    const data: SearchResult = await res.json();
    return data;
}


async function SearchResults({ params: { searchTerm } }: PageProps) {
    const searchResults = await handleSearch(searchTerm);
    // console.log(searchResults.organic_results[0].position);
    return (
        <div>
            <p className="m-1">You Search for: <span className="font-semibold">{searchTerm}</span></p>
            <ol className="space-y-5 p-5">
                {searchResults.organic_results.map((result) => (
                    <li key={result.position} className="list-decimal">
                        <p className="font-bold">{result.title}</p>
                        <p>{result.snippet}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}


export default SearchResults;
