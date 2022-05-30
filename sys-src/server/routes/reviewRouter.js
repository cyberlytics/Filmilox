const { body, validationResult } = require('express-validator');
const router = require('express').Router();
const Review = require('../models/reviewModel');
const auth = require('../middleware/auth');

/**
 * Recalculate the rating of a movie by taking the average of all the ratings of the reviews that are
 * associated with that movie.
 *
 * @param movie - The movie object that we want to recalculate the rating for.
 */
const recalculateMovieRating = async (movie) => {
    const reviews = await Review.find({ movie: movie._id });

    const newMovieRating =
        reviews.reduce((sumRating, curReview) => {
            return sumRating + curReview.rating;
        }, 0) / reviews.length;

    movie.rating = newMovieRating;
    await movie.save();
};

router.post(
    '/addreview',
    auth,
    body('movieId').exists().isString(),
    body('rating').exists().isInt({ min: 1, max: 10 }),
    body('comment').exists().isString().isLength({ max: 2000 }),
    async (req, res) => {
        const errors = validationResult(req);

        //return when there is an error
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { movieId, rating, comment } = req.body;

        //check if movie exists
        const existingMovie = await Movie.findById(movieId);
        if (!existingMovie)
            return res.status(404).json({
                errors: [
                    {
                        message: "The movie doesn't exist.",
                    },
                ],
            });

        //check if the user has a review to the movie
        const existingReview = await Review.findOne({
            user: req.user,
            movie: movieId,
        });
        if (existingReview)
            return res.status(404).json({
                errors: [
                    {
                        message: 'You can only add one review per movie.',
                    },
                ],
            });

        try {
            //create a new Review and save it
            const newReview = new Review({
                user: req.user,
                movie: movieId,
                rating,
                comment,
            });
            await newReview.save();
            recalculateMovieRating(existingMovie);

            return res.json({ status: true });
        } catch (e) {
            return res.status(500).json({ error: { message: 'Failed' } });
        }
    }
);

router.get('/getreview/:movieId', async (req, res) => {
    const { movieId } = req.params;
    console.log('Backend:', movieId);
    const reviews = await Review.find({ movie: movieId });
    if (!reviews) {
        return res.status(400).json({ error: { message: 'No reviews found' } });
    }
    return res.json(reviews);
});

module.exports = router;
