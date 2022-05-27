import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Backend from '../api/Backend';
import { IMovie } from '../model/IMovie';
import { useAppSelector } from '../redux/hooks';
import { selectIsLoggedIn } from '../redux/userSlice';
import { AddReview } from './AddReview';
import Comment from './Comment';
import MovieDetails from './MovieDetails/MovieDetails';

function FilmOverview() {
    const params = useParams();
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const [openAddReview, setOpenAddReview] = useState<boolean>(false);
    const [movie, setMovie] = useState<IMovie | undefined>();
    const handleAddReviewClose = () => {
        setOpenAddReview(false);
    };
    const handleAddReviewClick = () => {
        setOpenAddReview(true);
    };
    useEffect(() => {
        const getMovie = async () => {
            if (!params.filmId) return;
            const movieData = await Backend.getMovie({ _id: params.filmId });
            setMovie(movieData);
        };
        getMovie();
    }, []);
    return (
        <div className="flex flex-col justify-center w-full items-center">
            {isLoggedIn && openAddReview && params.filmId && (
                <AddReview
                    open={openAddReview}
                    onClose={handleAddReviewClose}
                    movieId={params.filmId}
                />
            )}
            <MovieDetails
                movie={movie}
                handleAddReviewClick={handleAddReviewClick}
            />
            <Comment />
        </div>
    );
}

export default FilmOverview;
