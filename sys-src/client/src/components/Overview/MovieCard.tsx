import { Button, Card, CardActionArea } from '@mui/material';
import ApiRouter from '../../api/ApiRouter';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IMovie } from '../../model/IMovie';
import TrailerDialog from '../TrailerDialog/TrailerDialog';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
    movie: IMovie;
}

const MovieCard = ({ movie }: IProps) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false);

    const handleOpenDialog = () => setOpen(true);

    const handleNavigate = () => {
        navigate(`film/${movie._id}`);
    };
    return (
        <>
            {open && (
                <TrailerDialog open={open} setOpen={setOpen} movie={movie} />
            )}

            <Card className="relative" key={movie._id}>
                <CardActionArea onClick={handleNavigate}>
                    <img
                        className="object-cover"
                        src={movie.image && ApiRouter.getImageLink(movie.image)}
                        alt={movie.title}
                    />
                </CardActionArea>
                <div className="px-4 py-2">
                    <p className="text-lg font-bold">{movie.title}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <p className="mr-2">{movie.rating}</p>
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
            </Card>
        </>
    );
};

export default MovieCard;
