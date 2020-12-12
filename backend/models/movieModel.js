const { Schema, model } = require('mongoose');


const movieSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    directorId: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
    },
    watched: {
        type: Boolean,
    },
}, {
    timestamps: true,
});


const Movie = model('Movie', movieSchema);

module.exports = Movie;