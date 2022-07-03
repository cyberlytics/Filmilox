import { render, screen } from '../../utils/test-utils';
import { IMovie } from '../../model/IMovie';
import { act } from 'react-dom/test-utils';
import MovieDetails from './MovieDetails';

const Wrapper = () => {
    const movieTest: IMovie = {
        _id: '629e10e389648379577beb9c',
        title: 'Andor',
        description: 'Beschreibung',
        trailer: 'https://www.youtube.com/watch?v=9gzmk29c9YM',
        release: new Date(2022, 5, 20),
        image: '/cover.png',
        rating: 2,
    };
    return (
        <MovieDetails
            movie={movieTest}
            handleAddReviewClick={function (): void {
                throw new Error('Function not implemented.');
            }}
        />
    );
};

describe('Test MovieDetails component', () => {
    test('Check if all elements are present.', async () => {
        render(<Wrapper />);

        //check if MovieDetails rendered
        const MovieDetailsId = screen.getByTestId('MovieDetailsId');
        expect(MovieDetailsId).toBeInTheDocument();

        //check movie cover
        const movieImage = screen.getByTestId('movieImage');
        expect(movieImage).toBeInTheDocument();
        expect(movieImage).toHaveAttribute(
            'src',
            'http://localhost:9999/cover.png'
        );
        //check trailer Button
        const trailerBtn = screen.getByTestId('trailerBtn');
        expect(trailerBtn).toBeInTheDocument();

        //check movie title
        const movieTitle = screen.getByTestId('movieTitle');
        expect(movieTitle).toBeInTheDocument();
        expect(movieTitle.textContent).toEqual('Andor');

        //check Rating
        const movieRating = screen.getByTestId('movieRating');
        expect(movieRating).toBeInTheDocument();
        movieRating.querySelectorAll('svg').forEach((rate, index) => {
            if (index <= 19)
                expect(rate.getAttribute('data-testid')).toBe('StarIcon');
            else
                expect(rate.getAttribute('data-testid')).toBe('StarBorderIcon');
        });

        //check Rating text
        const movieRatingTxt = screen.getByTestId('movieRatingTxt');
        expect(movieRatingTxt).toBeInTheDocument();
        expect(movieRatingTxt.textContent).toBe('2');

        //check Release Date
        const movieRelease = screen.getByTestId('movieRelease');
        expect(movieRelease).toBeInTheDocument();
        expect(movieRelease.textContent).toBe('Release date: 20.06.2022');

        //check Description
        const movieDescription = screen.getByTestId('movieDescription');
        expect(movieDescription).toBeInTheDocument();
        expect(movieDescription.textContent).toBe('Beschreibung');
    });
    test('Test Button clickable', () => {
        render(<Wrapper />);

        //check TRAILER button clickable
        const trailerBtn = screen.getByText('WATCH TRAILER');
        act(() => {
            trailerBtn.click();
        });

        //check TRAILER Dialog
        const TrailerDialog = screen.getByTestId('trailerDialog');
        expect(TrailerDialog).toBeInTheDocument();
    });
});
