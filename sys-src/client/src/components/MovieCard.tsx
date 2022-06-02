import Rating from '@mui/material/Rating';
import {Card, CardActionArea, CardContent, CardMedia} from '@mui/material';
import React from 'react';
import Box from "@mui/material/Box";

const MovieCard = (props:any) => {
    return (
        <>
            {props.movies.map((movie: any, index:number) => (
                <div className="m-3" key={index}>
                    <Card style={{ height: 370, width: 200, padding: 0 }}>
                        <CardActionArea>
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
                                    height: 35,
                                    paddingTop: 5,
                                }}
                            >
                                <p className="text-sm">{movie.Title}</p>
                            </div>
                            <div style={{alignContent:"center"}}>
                                <Box
                                    style={{width:10,
                                            float:"right",
                                            paddingRight:33,
                                            paddingTop:8,}}
                                >
                                    <b>{movie.Rating}</b>
                                </Box>
                                <Box
                                    style={{
                                        justifyContent: 'right',
                                        display: 'flex',
                                        paddingRight:1,
                                        paddingTop:9,
                                    }}
                                >
                                    <Rating
                                        name="movie-rating"
                                        value={1}
                                        max = {1}
                                        size="medium"
                                        readOnly
                                        style={{padding:0,
                                        margin:0}}
                                    />
                                </Box>
                            </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            ))}
        </>
    );
};

export default MovieCard;
