import Rating from '@mui/material/Rating';
import { Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';

const MovieCard = (props: any) => {
    return (
        <>
            {props.movies.map((movie: any) => (
                <div className="m-3" key={movie}>
                    <Card style={{ height: 370, width: 200, padding: 0 }}>
                        <CardMedia
                            style={{
                                minHeight: 300,
                                minWidth: 200,
                                maxHeight: 300,
                                maxWidth: 200,
                            }}
                            component="img"
                            src={movie.Poster}
                            alt="Movie Poster"
                        ></CardMedia>
                        <CardContent
                            className="content-center"
                            style={{ justifyContent: 'top', padding: 0 }}
                        >
                            <div
                                style={{
                                    display: 'block',
                                    height: 45,
                                    paddingTop: 5,
                                }}
                            >
                                <p className="text-sm">{movie.Title}</p>
                            </div>
                            <div
                                style={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                }}
                            >
                                <Rating
                                    style={{ paddingBottom: 10 }}
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
