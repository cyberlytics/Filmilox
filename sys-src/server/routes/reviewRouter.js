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

        try {
            const { movieId, rating, comment } = req.body;

            //create a new Review and save it
            const newReview = new Review({
                user: req.user,
                movie: movieId,
                rating,
                comment,
            });
            await newReview.save();

            return res.json({});
        } catch (e) {
            return res.status(500).json({ error: { message: 'Failed' } });
        }
    }
);

module.exports = router;
