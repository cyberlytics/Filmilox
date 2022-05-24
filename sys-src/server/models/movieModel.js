const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, unique: false, required: true },
    description: { type: String, unique: false, required: true },
    release: { type: Date, unique: false, required: true },
    trailer: { type: String, unique: false },
    image: { type: String, unique: false, required: true },
});

module.exports = Movie = mongoose.model('Movie', movieSchema);
