import { Button, Rating } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import { selectIsLoggedIn } from '../../redux/userSlice';
import EditIcon from '@mui/icons-material/Edit';
import { IMovie } from '../../model/IMovie';
import ApiRouter from '../../api/ApiRouter';
import { format } from 'date-fns';
import TrailerDialog from '../TrailerDialog/TrailerDialog';
import { useState } from 'react';
import placeholder from '../Overview/placeholder.svg';

interface IProps {
    handleAddReviewClick: () => void;
    movie: IMovie | undefined;
}
const MovieDetails = ({ handleAddReviewClick, movie }: IProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    const handleShowTrailer = () => setOpen(true);

    return (
        <>
            {movie && open && (
                <TrailerDialog open={open} setOpen={setOpen} movie={movie} />
            )}

            <div className="flex p-8 max-w-7xl w-full justify-between flex-col tablet:flex-row">
                <div className="flex flex-col items-center tablet:mr-8">
                    <img
                        className="tablet:w-96 w-full rounded shadow-xl mb-4"
                        src={
                            movie?.image
                                ? ApiRouter.getImageLink(movie.image)
                                : placeholder
                        }
                        alt="Movie"
                    />
                    <Button variant="outlined" onClick={handleShowTrailer}>
                        TRAILER ANSCHAUEN
                    </Button>
                </div>
                <div className="max-w-3xl">
                    <div className="flex">
                        <div className="w-full">
                            <div className=" flex tablet:items-center my-4 tablet:my-0 justify-between w-full flex-col tablet:flex-row mb-2">
                                <h1 className="text-2xl mb-4 tablet:mb-0">
                                    {movie?.title}
                                </h1>
                                {isLoggedIn && (
                                    <Button
                                        startIcon={<EditIcon />}
                                        sx={{ borderRadius: '30px' }}
                                        variant="contained"
                                        onClick={handleAddReviewClick}
                                    >
                                        Bewertung Abgeben
                                    </Button>
                                )}
                            </div>
                            <br className="tablet:hidden" />
                            <div className="flex items-center">
                                <Rating
                                    precision={0.1}
                                    name="customized-10"
                                    readOnly
                                    value={movie?.rating ? movie.rating : 0}
                                    max={10}
                                />
                                <p className="font-bold ml-4">
                                    {movie?.rating
                                        ? Math.round(movie.rating * 10) / 10
                                        : '--'}
                                </p>
                            </div>

                            <p>
                                Erscheinungsdatum:{' '}
                                {movie?.release &&
                                    format(
                                        new Date(movie.release),
                                        'dd.MM.yyyy'
                                    )}
                            </p>
                        </div>
                    </div>

                    <p className="mt-4">{movie?.description}</p>
                </div>
            </div>
        </>
    );
};

export default MovieDetails;
