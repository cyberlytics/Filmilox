import React, {useEffect, useState} from 'react';
import {NavigateFunction, useNavigate, useSearchParams} from 'react-router-dom';
import Backend from "../../api/Backend";
import {IMovieWithID} from "../../model/IMovie";
import ApiRouter from "../../api/ApiRouter";
import {format} from "date-fns";

function SearchResult() {
    const [searchParams] = useSearchParams();
    const [searchResult, setSearchResult] = useState<Array<IMovieWithID>>();
    const searchQuery: string | null = searchParams.get("find");
    const navigate: NavigateFunction = useNavigate();

    function handleNavigation(movieId: string): void {
        navigate("/film/" + movieId);
    }

    useEffect(() => {
        if (searchQuery && !searchResult) {
            const fetchSearchResults = async () => {
                const searchResults: Array<IMovieWithID> = await Backend.search(searchQuery);
                setSearchResult(searchResults);
            };
            fetchSearchResults().catch(console.error);
        }
    })

    return (
        <div className="flex flex-col justify-center w-full mx-16">
            <h1 className="text-4xl my-10 ">Ergebnisse für {searchQuery}</h1>
            {searchResult && searchResult.map((movie: IMovieWithID) => {
                return(
                    <div className="flex flex-row shadow-md mb-4 p-4 w-11/12" key={movie._id}>
                        <img
                            className="h-48 mr-10 drop-shadow-md mb-4 cursor-pointer"
                            src={movie.image && ApiRouter.getImageLink(movie.image)}
                            onClick={() => handleNavigation(movie._id)}
                            alt=""/>
                        <div className="flex flex-col justify-start">
                            <h2 className="text-2xl font-semibold mb-2">
                                <a href={'/film/'+movie._id}>{movie.title}</a>
                                <span className="font-normal"> ({movie.release && format(new Date(movie.release), 'yyyy')})
                            </span>
                            </h2>
                            <p className="text-sm font-medium w-1/2 text-ellipsis">{movie.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SearchResult;