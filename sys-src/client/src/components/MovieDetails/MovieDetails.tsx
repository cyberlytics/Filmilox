import { Button, Rating } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import { selectIsLoggedIn } from '../../redux/userSlice';
import EditIcon from '@mui/icons-material/Edit';

const data = {
    imageSource: require('./adamProject.png'),
    filmName: 'The Adam Project',
    description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    filmRating: 4.5,
    releaseDate: new Date().toLocaleString(),
    trailerLink: 'https://www.youtube.com/watch?v=HTMcth-SXDQ&t=20s',
};
interface IProps {
    handleAddReviewClick: () => void;
}
const MovieDetails = ({ handleAddReviewClick }: IProps) => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    return (
        <div className="flex p-8 max-w-7xl w-full justify-between flex-col tablet:flex-row">
            <div className="flex flex-col items-center tablet:mr-8">
                <img
                    className="tablet:w-96 w-full rounded shadow-xl mb-4"
                    src={data.imageSource}
                />
                <a href={data.trailerLink}>
                    <Button variant="outlined">TRAILER ANSCHAUEN</Button>
                </a>
            </div>
            <div className="max-w-3xl">
                <div className="flex">
                    <div className="w-full">
                        <div className=" flex tablet:items-center my-4 tablet:my-0 justify-between w-full flex-col tablet:flex-row mb-2">
                            <h1 className="text-2xl mb-4 tablet:mb-0">
                                {data.filmName}
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
                            defaultValue={data.filmRating}
                            max={10}
                        />
                        <p>Erscheinungsdatum: {data.releaseDate}</p>
                    </div>
                </div>

                <p className="mt-4">{data.description}</p>
            </div>
        </div>
    );
};

export default MovieDetails;
