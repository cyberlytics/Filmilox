import { useEffect, useState } from 'react';
import Backend from '../../api/Backend';
import { IMovie } from '../../model/IMovie';
import MovieCard from './MovieCard';

function Overview() {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await Backend.getAllMovies();
            if (data?.movies) setMovies(data.movies);
        };
        fetchMovies();
    }, []);

    return (
        <div
            data-testid="overview-main"
            className="text-center justify-center grid grid-col-1 tabLaptop:grid-cols-4 tablet:grid-cols-3 deLa:grid-cols-5 desktop:grid-cols-6 gap-4 p-8"
        >
            {movies.map((m) => (
                <MovieCard movie={m} key={m._id} />
            ))}
        </div>
    );
}
export default Overview;
