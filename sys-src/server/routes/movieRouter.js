const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Movie = require('../models/movieModel');

router.post(
    '/add-movie',
    auth,
    // body('title').exists().isString(),
    // body('description').exists().isString(),
    // body('release').exists().isDate(),
    // body('trailer').exists().isString(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { title, description, release, trailer } = req.body;

            // Ceck if Admin:
            const isAdmin = await User.findById(req.user);
            if (!isAdmin) {
                return res.status(400).json({
                    errors: [{ param: 'notAdmin', message: 'not allowed' }],
                });
            }

            // Create new User:
            const newMovie = new Movie({
                title,
                description,
                release,
                trailer,
            });

            await newMovie.save();
            return res.json({ status: true });
        } catch (e) {
            console.log(e);
            return res
                .status(500)
                .json({
                    status: false,
                    errors: [{ param: 'internal', message: e.message }],
                });
        }
    }
);

module.exports = router;
