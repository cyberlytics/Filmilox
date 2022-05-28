const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    release: {type: Date, required: true},
    trailer: {type: String, unique: false},
    image: {type: String},
    rating: { type: Number, default: 0 },
});

movieSchema.index({title: 'text', description: 'text'}, {weights: {title: 20, description: 10}, name: 'movieIndex'});

module.exports = Movie = mongoose.model('Movie', movieSchema);
