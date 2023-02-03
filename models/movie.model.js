const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieSchema = new Schema({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    director: {type: String, required: true},
    plot: {type: String, required: true},
    poster: {type: String, required: true, default: null},
    genres: [{type: String, required: true, default: null}],
    imdb: {
        rating: {type: Number, required: true},
        votes: {type: Number, required: true}
    }
});

module.exports = mongoose.model('Movie', movieSchema, 'movies2023');
