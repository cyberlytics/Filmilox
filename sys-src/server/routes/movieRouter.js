const router = require('express').Router();
const User = require('../models/userModel');
const { validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Movie = require('../models/movieModel');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.post('/add-movie', auth, upload.single('file'), async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, description, release, trailer } = req.body;

        // Check if Admin:
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
        return res.status(500).json({
            status: false,
            errors: [{ param: 'internal', message: e.message }],
        });
    }
});

router.get('/get-movie/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const movieDb = await Movie.findById(_id);
        if (!movieDb)
            return res.status(400).json({
                status: false,
                errors: [{ param: 'movie', message: 'no movie found' }],
            });
        return res.json(movieDb);
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            status: false,
            errors: [{ param: 'internal', message: e.message }],
        });
    }
});
module.exports = router;
