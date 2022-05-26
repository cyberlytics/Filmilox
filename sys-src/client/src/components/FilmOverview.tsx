import { Button } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { selectIsLoggedIn } from '../redux/userSlice';
import { AddReview } from './AddReview';
import Comment from './Comment';
import MovieDetails from './MovieDetails/MovieDetails';

function FilmOverview() {
    const params = useParams();
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const [openAddReview, setOpenAddReview] = useState<boolean>(false);

    const handleAddReviewClose = () => {
        setOpenAddReview(false);
    };
    const handleAddReviewClick = () => {
        setOpenAddReview(true);
    };

    return (
        <div className="flex flex-col justify-center w-full items-center">
            {isLoggedIn && openAddReview && params.filmId && (
                <AddReview
                    open={openAddReview}
                    onClose={handleAddReviewClose}
                    movieId={params.filmId}
                />
            )}
            <MovieDetails handleAddReviewClick={handleAddReviewClick} />
            <Comment />
        </div>
    );
}

export default FilmOverview;
