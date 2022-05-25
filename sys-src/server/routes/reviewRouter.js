const { body, validationResult } = require('express-validator');
const router = require('express').Router();
const Review = require('../models/reviewModel');
const auth = require('../middleware/auth');

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

            return res.json({ status: true });
        } catch (e) {
            return res.status(500).json({ error: { message: 'Failed' } });
        }
    }
);

module.exports = router;
