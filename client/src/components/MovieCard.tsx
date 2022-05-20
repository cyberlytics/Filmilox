import Rating from '@mui/material/Rating';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const MovieCard = (props: any) => {
    return (
        <>
            {props.movies.map((movie: any, index: any) => (
                <div className="m-3">
                    <Card sx={{ maxWidth: 200, maxHeight: 380 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            src={movie.Poster}
                            alt="Movie Poster"
                        ></CardMedia>
                        <CardContent className="content-center">
                            <div>
                                <p className="text-sm">{movie.Title}</p>
                            </div>
                            <div
                                style={{ display: 'flex' }}
                                className="content-center"
                            >
                                <Rating
                                    name="movie-rating"
                                    defaultValue={0}
                                    max={10}
                                    size="small"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </>
    );
};

export default MovieCard;
