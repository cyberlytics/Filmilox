import { fireEvent, render, screen } from '../../utils/test-utils';
import { IMovie } from '../../model/IMovie';
import { useState } from 'react';
import { IReviewGet } from '../../model/IReview';
import { act } from 'react-dom/test-utils';
import Review from './Review';

const Wrapper = () => {
    const movieTest: IMovie = {
        _id: 'random_id',
        title: 'Titel',
        description: 'Beschreibung',
        trailer: 'Trailer-Link',
        release: new Date(),
        image: '/cover.png',
        rating: 2,
    };
    const [movie, setMovie] = useState<IMovie>(movieTest);
    const [reviews, setReviews] = useState<IReviewGet[]>([]);

    return (
        <div className="flex flex-col justify-center w-full items-center">
            {reviews.map((review: IReviewGet) => (
                <Review
                    review={review}
                    setReviews={setReviews}
                    key={review._id}
                    setMovie={setMovie}
                />
            ))}{' '}
        </div>
    );
};
describe('Test DeleteReview component', () => {
    test('Check UI elements', () => {
        const userName = screen.getByTestId('deletereview-username');
        expect(userName).toBeInTheDocument();

        const filmRating = screen.getByTestId('deletereview-rating');
        expect(filmRating).toBeInTheDocument();
        expect(filmRating.querySelectorAll('svg').length).toBe(10);

        const reviewDate = screen.getByTestId('deletereview-date');
        expect(reviewDate).toBeInTheDocument();

        const deleteBtn = screen.getByTestId('deletereview-button');
        expect(deleteBtn).toBeInTheDocument();

        const comment = screen.getByTestId('deletereview-comment');
        expect(comment).toBeInTheDocument();
    });

    test('Test deleting an existing review for a film', () => {
        const button = screen.getByTestId('addreview-button');
        act(() => {
            button.click();
        });
    });
});
