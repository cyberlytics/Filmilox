const router = require('express').Router();
const Movie = require('../models/movieModel');

router.get('/', async (req, res) => {
    await Movie.find({$text: {$search: req.query.q}}).limit(50).exec((err,results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: false,
                errors: [{ param: 'internal'}],
            });
        }
        if (results) {
            return res.json(results);
        }
    } )
});

module.exports = router;