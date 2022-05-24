import { Button } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { selectIsLoggedIn } from '../redux/userSlice';
import { AddReview } from './AddReview';

import React from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
function FilmDetails() {
    const params = useParams();
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const [openAddReview, setOpenAddReview] = useState<boolean>(false);

    const handleAddReviewClick = () => {
        setOpenAddReview(true);
    };

    const handleAddReviewClose = () => {
        setOpenAddReview(false);
    };

    return (
        <div>
            {isLoggedIn && (
                <Button variant="contained" onClick={handleAddReviewClick}>
                    Film bewerten
                </Button>
            )}
            {isLoggedIn && openAddReview && params.filmId && (
                <AddReview
                    open={openAddReview}
                    onClose={handleAddReviewClose}
                    movieId={params.filmId}
                />
            )}
            <Comment />
        </div>
    );
}

export default FilmDetails;
