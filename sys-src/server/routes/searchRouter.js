const router = require('express').Router();
const Movie = require('../models/movieModel');

router.get('/', async (req, res) => {
    await Movie.find({
        $or: [
            { title: { $regex: req.query.q, $options: 'i' } },
            { description: { $regex: req.query.q, $options: 'i' } },
        ],
    })
        .limit(50)
        .exec((err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: false,
                    errors: [{ param: 'internal' }],
                });
            }
            if (results) {
                // Rank results with that contain the query in the title higher those that don't
                results = results.sort((a, b) => {
                    const a_title = a.title.toLowerCase();
                    const b_title = b.title.toLowerCase();
                    const q = req.query.q.toLowerCase();
                    if (a_title.includes(q) && !b_title.includes(q)) {
                        return -1;
                    }
                    if (!a_title.includes(q) && b_title.includes(q)) {
                        return 1;
                    }
                    return 0;
                });
                return res.json(results);
            }
        });
});

module.exports = router;
