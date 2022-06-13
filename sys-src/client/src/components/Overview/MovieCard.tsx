import {Button, Card, CardActionArea, CardContent, CardMedia} from '@mui/material';
import ApiRouter from '../../api/ApiRouter';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IMovie } from '../../model/IMovie';
import TrailerDialog from '../TrailerDialog/TrailerDialog';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import placeholder from './placeholder.png';

interface IProps {
    movie: IMovie;
}

const MovieCard = ({ movie }: IProps) => {
    const navigate = useNavigate();
    const [openTrailerDialog, setOpenTrailerDialog] = useState<boolean>(false);

    const handleOpenDialog = () => setOpenTrailerDialog(true);

    const handleNavigate = () => {
        navigate(`film/${movie._id}`);
    };
    return (
        <>
            {openTrailerDialog && (
                <TrailerDialog
                    open={openTrailerDialog}
                    setOpen={setOpenTrailerDialog}
                    movie={movie}
                />
            )}

                <div className="m-3 w-full flex items-center justify-between" key={movie._id}>
                    <Card style={{ maxHeight: 435, maxWidth: 240, padding: 0 }}>
                        <CardActionArea onClick={handleNavigate}>
                            <CardMedia
                                style={{
                                    maxHeight: 360,
                                    maxWidth: 240,
                                }}
                                component="img"
                                src={movie.image
                                    ? ApiRouter.getImageLink(movie.image)
                                    : placeholder}
                                alt="Movie Poster"
                            ></CardMedia>
                        </CardActionArea>
                            <CardContent
                                className="content-center"
                                style={{ maxHeight:75, maxWidth:240, justifyContent: 'top', padding: 0 }}
                            >
                                <div
                                    style={{
                                        display: 'block',
                                        height: 25,
                                        paddingTop: 5,
                                    }}
                                >
                                    <p className="text-sm"><b>{movie.title}</b></p>
                                </div>
                                <div className="px-4 py-2 h-20">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <p className="mr-2">
                                                <b>{movie.rating
                                                    ? Math.round(movie.rating * 10) / 10
                                                    : '--'}</b>
                                            </p>
                                            <img
                                                src={require('./star.png')}
                                                alt="star"
                                                className="w-4 h-4"
                                            />
                                        </div>
                                        <Button
                                            startIcon={<PlayArrowIcon />}
                                            onClick={handleOpenDialog}
                                        >
                                            Trailer
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                    </Card>
                </div>
        </>
    );
};

export default MovieCard;
