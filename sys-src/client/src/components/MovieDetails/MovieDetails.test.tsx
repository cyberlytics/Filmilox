import { fireEvent, render, screen } from '../../utils/test-utils';
import { IMovie } from '../../model/IMovie';
import { useState } from 'react';
import { IReviewGet } from '../../model/IReview';
import { act } from 'react-dom/test-utils';
import MovieDetails from './MovieDetails';
import { debug } from 'console';

const Wrapper = () => {
    const movieTest: IMovie = {
        _id: '629e10e389648379577beb9c',
        title: 'Andor',
        description: 'Beschreibung',
        trailer: 'https://www.youtube.com/watch?v=9gzmk29c9YM',
        release: new Date(),
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
        const $ = require('jquery');
        render(<Wrapper />);
        const MovieDetailsId = screen.getByTestId('MovieDetailsId');
        expect(MovieDetailsId).toBeInTheDocument();

        const movieImage = screen.getByTestId('movieImage');
        expect(movieImage).toBeInTheDocument();
        //expect(movieImage).toHaveAttribute('src', '/cover.png');

        const trailerBtn = screen.getByTestId('trailerBtn');
        expect(trailerBtn).toBeInTheDocument();
        /*expect(trailerBtn).toHaveAttribute(
            'onClick',
            'https://www.youtube.com/watch?v=9gzmk29c9YM'
        );*/

        const movieTitle = screen.getByTestId('movieTitle');
        expect(movieTitle).toBeInTheDocument();
        expect($('#movieTitle').text()).toEqual('Andor');

        /*const movieVot = screen.getByTestId('movieVot');
        expect(movieVot).toBeInTheDocument();*/

        const movieRating = screen.getByTestId('movieRating');
        expect(movieRating).toBeInTheDocument();
        //expect(movieRating).toHaveValue(2);

        const movieRatingTxt = screen.getByTestId('movieRatingTxt');
        expect(movieRatingTxt).toBeInTheDocument();
        //expect(movieRatingTxt).toHaveValue('2');

        const movieRelease = screen.getByTestId('movieRelease');
        expect(movieRelease).toBeInTheDocument();
        //expect(movieDescription).toHaveValue('Beschreibung');

        const movieDescription = screen.getByTestId('movieDescription');
        expect(movieDescription).toBeInTheDocument();
        //expect(movieDescription).toHaveValue('Beschreibung');
    });
    test('Test Button clickable', () => {
        render(<Wrapper />);

        const trailerBtn = screen.getByText('TRAILER ANSCHAUEN');
        act(() => {
            trailerBtn.click();
        });
        //expected to open the trailer dialog

        /*const TrailerDialog = screen.getByTestId('trailerDialog');
        expect(TrailerDialog).toBeInTheDocument();*/
        //expexted to open the dialog

        /* const movieVot = screen.getByText('Bewertung Abgeben');
        act(() => {
            movieVot.click();
        });*/
    });
});
