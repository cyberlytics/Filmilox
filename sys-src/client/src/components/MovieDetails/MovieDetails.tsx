import { Button, Rating } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import { selectIsLoggedIn } from '../../redux/userSlice';
import EditIcon from '@mui/icons-material/Edit';
import { IMovie } from '../../model/IMovie';
import ApiRouter from '../../api/ApiRouter';
import { format } from 'date-fns';

interface IProps {
    handleAddReviewClick: () => void;
    movie: IMovie | undefined;
}
const MovieDetails = ({ handleAddReviewClick, movie }: IProps) => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    return (
        <div className="flex p-8 max-w-7xl w-full justify-between flex-col tablet:flex-row">
            <div className="flex flex-col items-center tablet:mr-8">
                <img
                    className="tablet:w-96 w-full rounded shadow-xl mb-4"
                    src={movie?.image && ApiRouter.getImageLink(movie.image)}
                />
                <a href={movie?.trailer}>
                    <Button variant="outlined">TRAILER ANSCHAUEN</Button>
                </a>
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
                                    Bewerten Abgeben
                                </Button>
                            )}
                        </div>
                        <br className="tablet:hidden" />
                        <Rating
                            name="customized-10"
                            readOnly
                            value={movie?.rating ? movie.rating : 0}
                            max={10}
                        />
                        <p>
                            Erscheinungsdatum:{' '}
                            {movie?.release &&
                                format(new Date(movie.release), 'dd.MM.yyyy')}
                        </p>
                    </div>
                </div>

                <p className="mt-4">{movie?.description}</p>
            </div>
        </div>
    );
};

export default MovieDetails;
