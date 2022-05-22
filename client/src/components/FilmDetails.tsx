import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddReview } from './AddReview';

function FilmDetails() {
    const params = useParams();
    const [openAddReview, setOpenAddReview] = useState<boolean>(false);

    const handleAddReviewClick = () => {
        setOpenAddReview(true);
    };

    const handleAddReviewClose = () => {
        setOpenAddReview(false);
    };

    return (
        <div>
            <p>
                This should be the Film Details Page for the Film with id{' '}
                {params.filmId}
            </p>
            <Button variant="contained" onClick={handleAddReviewClick}>
                Film bewerten
            </Button>
            {openAddReview && params.filmId && (
                <AddReview
                    open={openAddReview}
                    onClose={handleAddReviewClose}
                    movieId={params.filmId}
                />
            )}
        </div>
    );
}

export default FilmDetails;
