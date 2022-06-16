const router = require('express').Router();
const User = require('../models/userModel');
const multer = require('multer');
const imageId = require('../middleware/imageId');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/');
    },
    filename: (req, file, cb) => {
        const extension = file.mimetype.split('/')[1];
        cb(null, req.imageId + '.' + extension);
    },
});

const upload = multer({ storage: storage });

router.post(
    '/usersettings',
    imageId,
    upload.single('file'),
    async (req, res) => {
        try{
            const formData = req.body;
            const user = await User.findById(req.user);
            user.profilepicture = formData['profilepicture'];
            await user.save();
            return res.json({ status: true });
        } catch (e) {
            return res
                .status(500)
                .json({ errors: [{ param: 'internal', message: e.message }] });
        }
    });

module.exports = router;