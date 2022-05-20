import {
    Button,
    Dialog,
    FormHelperText,
    Grid,
    Rating,
    TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

interface Props {
    open: boolean;
    onClose(): void;
}

//TODO: Add movie cover

export const AddReview = (props: Props) => {
    const { open, onClose } = props;
    const commentMaxLength: number = 2000;

    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState<string>('');
    const [ratingError, setRatingError] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleCommentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.value.length <= commentMaxLength)
            setComment(event.target.value);
    };

    const handleRatingChange = (
        event: React.SyntheticEvent,
        value: number | null
    ) => {
        if (value === null) return;
        if (value < 1) setRating(1);
        else if (value > 10) setRating(10);
        else setRating(value);
    };

    const submitReview = () => {
        if (rating === 0) {
            setRatingError('Sternbewertung fehlt!');
            return;
        }
        try {
            console.log('Submit Review:', rating, comment);
            onClose();
        } catch (error) {
            setError('Submission failed!');
        }
    };

    useEffect(() => {
        setRatingError('');
    }, [rating]);

    return (
        <>
            <Dialog open={open} onClose={onClose} maxWidth={'md'}>
                <Grid container spacing={2} textAlign={'center'}>
                    <Grid item xs={12} sx={{ mt: 4 }}>
                        Movie Thumbnail
                    </Grid>
                    <Grid item xs={12}>
                        <Rating
                            max={10}
                            value={rating}
                            defaultValue={0}
                            onChange={handleRatingChange}
                            sx={{ fontSize: 60 }}
                        ></Rating>
                        {ratingError && (
                            <FormHelperText
                                error
                                sx={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                }}
                            >
                                {ratingError}
                            </FormHelperText>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            multiline
                            rows={6}
                            sx={{ width: 800 }}
                            onChange={handleCommentChange}
                            value={comment}
                            label={'Kommentar'}
                            variant={'filled'}
                        ></TextField>
                        <FormHelperText
                            error={comment.length >= 2000 ? true : false}
                            sx={{
                                width: 800,
                                textAlign: 'right',
                                alignContent: 'center',
                                mx: 'auto',
                            }}
                        >{`${comment.length}/${commentMaxLength}`}</FormHelperText>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 4 }}>
                        <Button
                            variant="contained"
                            onClick={submitReview}
                            sx={{
                                fontSize: 20,
                                width: 300,
                                borderRadius: 10,
                            }}
                        >
                            Bewerten
                        </Button>
                        {error && (
                            <FormHelperText
                                error
                                sx={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    mt: 2,
                                }}
                            >
                                {error}
                            </FormHelperText>
                        )}
                    </Grid>
                </Grid>
            </Dialog>
        </>
    );
};
