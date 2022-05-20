import MovieCard from './components/MovieCard';
import { useState } from 'react';
import { Grid, ImageList } from '@mui/material';

function App() {
    const [movies, setMovies] = useState([
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
    ]);

    return (
        <div>
            <div className="bg-sky-200 p-8 shadow">
                <p className="text-center text-4xl font-bold">Filmilox</p>
            </div>

            <div style={{ display: 'flex' }}>
                <Grid
                    className="m-2"
                    direction="row"
                    rowSpacing={2}
                    columnSpacing={2}
                >
                    <MovieCard movies={movies} />
                </Grid>
            </div>
        </div>
    );
    /**return (
        /<div>
            <div className="bg-sky-200 p-8 shadow">
                <p className="text-center text-4xl font-bold">Filmilox</p>
            </div>
            <MovieCard />
        </div>
    );**/
}

export default App;
