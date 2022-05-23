const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, unique: false, required: true },
    description: { type: String, unique: false, required: true },
    release: { type: String, unique: false, required: false },
    trailer: { type: String, unique: false, required: false },
    image: { type: File, unique: false, required: false },
});

module.exports = Movie = mongoose.model('Movie', movieSchema);
