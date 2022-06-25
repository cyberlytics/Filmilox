import Review from './Review';
import { IMovie } from '../../model/IMovie';
import { IReviewGet } from '../../model/IReview';
import { useState } from 'react';
import { render } from '../../utils/test-utils';
import Backend from '../../api/Backend';
import { waitFor } from '@testing-library/react';

const movieTest: IMovie = {
    _id: 'random_id',
    title: 'Titel',
    description: 'Beschreibung',
    trailer: 'Trailer-Link',
    release: new Date(),
    image: '/cover.png',
    rating: 2,
};
const reviewTest: IReviewGet = {
    _id: 'test_id',
    user: { _id: 'test_id', username: 'TestUser' },
    movie: 'random_id',
    rating: 2,
    comment: 'Beschreibung',
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
};

jest.mock('../../api/Backend');

const Wrapper = () => {
    const [movie, setMovie] = useState<IMovie>(movieTest);
    const [reviews, setReviews] = useState<IReviewGet[]>([]);
    return (
        <Review
            setMovie={setMovie}
            setReviews={setReviews}
            review={reviewTest}
        />
    );
};

describe('Test Voting on Review', () => {
    it('should render the placeholders if no votes are found', async () => {
        jest.spyOn(Backend, 'getVotes').mockResolvedValue({
            data: {
                upvote: 0,
                downvote: 0,
            },
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        });
        const { getByTestId } = render(<Wrapper />);

        await waitFor(() => {
            const downvotePlaceholder = getByTestId(
                'downvote-count-placeholder'
            );
            const upvotePlaceholder = getByTestId('upvote-count-placeholder');
            expect(downvotePlaceholder).toBeInTheDocument();
            expect(upvotePlaceholder).toBeInTheDocument();
        });
    });
    it('should display the vote counts', async () => {
        jest.spyOn(Backend, 'getVotes').mockResolvedValue({
            data: {
                upvote: 100,
                downvote: 50,
            },
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        });
        const { getByTestId } = render(<Wrapper />);
        await waitFor(() => {
            const downvoteCount = getByTestId('downvote-count');
            const upvoteCount = getByTestId('upvote-count');
            expect(downvoteCount).toBeInTheDocument();
            expect(downvoteCount).toHaveTextContent('50');
            expect(upvoteCount).toBeInTheDocument();
            expect(upvoteCount).toHaveTextContent('100');
        });
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////
describe('Test MovieCard Component', () => {
    test('check UI elements', () => {
        const { getByTestId } = render(<Wrapper />);

        //check if main Review div is rendered
        const mainDiv = getByTestId('review-main');
        expect(mainDiv).toBeInTheDocument();

        //check Review card div
        const cardDiv = getByTestId('review-card');
        expect(cardDiv).toBeInTheDocument();

        //check review authors username
        const username = getByTestId('addreview-username');
        expect(username).toBeInTheDocument();

        //check rating in the review
        const rating = getByTestId('addreview-rating');
        expect(rating).toBeInTheDocument();

        //check date of the review
        const reviewDate = getByTestId('addreview-date');
        expect(reviewDate).toBeInTheDocument();

        //check delete icon of the review
        const deleteIcon = getByTestId('deletereview-button');
        expect(deleteIcon).toBeInTheDocument();

        //check text the review
        const reviewText = getByTestId('addreview-comment');
        expect(reviewText).toBeInTheDocument();
    });
});
