import MovieCard from './MovieCard'
import React from 'react';


const movies = [
    {
        Title: 'Cars',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMGEwMzhmYjYtYTgyYS00YjMwLThjMmMtZDkxY2VmMjNiMzhiXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'GoodFellas - Drei Jahrzehnte in der Mafia',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGIzYmY3NDctNTZmZS00YjM5LTljYTctZDNkZjg5MjliZTEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Memories of Murder',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    },
    {
        Title: 'Cars',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMGEwMzhmYjYtYTgyYS00YjMwLThjMmMtZDkxY2VmMjNiMzhiXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Goodfellas',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGIzYmY3NDctNTZmZS00YjM5LTljYTctZDNkZjg5MjliZTEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Memories of Murder',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    },
    {
        Title: 'Cars',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMGEwMzhmYjYtYTgyYS00YjMwLThjMmMtZDkxY2VmMjNiMzhiXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Goodfellas',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGIzYmY3NDctNTZmZS00YjM5LTljYTctZDNkZjg5MjliZTEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Memories of Murder',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    },
    {
        Title: 'Cars',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMGEwMzhmYjYtYTgyYS00YjMwLThjMmMtZDkxY2VmMjNiMzhiXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Goodfellas',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGIzYmY3NDctNTZmZS00YjM5LTljYTctZDNkZjg5MjliZTEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Memories of Murder',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    },
    {
        Title: 'Cars',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMGEwMzhmYjYtYTgyYS00YjMwLThjMmMtZDkxY2VmMjNiMzhiXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Goodfellas',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGIzYmY3NDctNTZmZS00YjM5LTljYTctZDNkZjg5MjliZTEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Memories of Murder',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    },
    {
        Title: 'Cars',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMGEwMzhmYjYtYTgyYS00YjMwLThjMmMtZDkxY2VmMjNiMzhiXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Goodfellas',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGIzYmY3NDctNTZmZS00YjM5LTljYTctZDNkZjg5MjliZTEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Memories of Murder',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    },
    {
        Title: 'Cars',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMGEwMzhmYjYtYTgyYS00YjMwLThjMmMtZDkxY2VmMjNiMzhiXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Goodfellas',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGIzYmY3NDctNTZmZS00YjM5LTljYTctZDNkZjg5MjliZTEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Memories of Murder',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    },
    {
        Title: 'Cars',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMGEwMzhmYjYtYTgyYS00YjMwLThjMmMtZDkxY2VmMjNiMzhiXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Goodfellas',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGIzYmY3NDctNTZmZS00YjM5LTljYTctZDNkZjg5MjliZTEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Memories of Murder',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    },
    {
        Title: 'Cars',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMGEwMzhmYjYtYTgyYS00YjMwLThjMmMtZDkxY2VmMjNiMzhiXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Goodfellas',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGIzYmY3NDctNTZmZS00YjM5LTljYTctZDNkZjg5MjliZTEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
        Title: 'Memories of Murder',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    },
];

function Overview() {

    return (
        <div>
            <div
                className="text-center"
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginLeft: 200,
                    marginRight: 200,
                    marginTop: 30,
                }}
            >
                <MovieCard movies={movies}/>
            </div>
        </div>
    );
}
export default Overview;