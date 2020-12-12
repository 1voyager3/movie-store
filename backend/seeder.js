const mongoose = require('mongoose');
require('dotenv').config();
require('colors');
const directors = require('./data/directors');
const movies = require('./data/movies');
const Director = require('./models/directorModel');
const Movie = require('./models/movieModel');
const connectDB = require('./config/db');


connectDB();

// importing data from existing file
const importData = async () => {

    try {
        await Director.deleteMany();
        await Movie.deleteMany();

        await Director.insertMany(directors);

        await Movie.insertMany(movies);

        console.log('Data Imported!'.green.inverse);

        process.exit();

    } catch (error) {
        console.log(`${ error }`.red.inverse);
        process.exit(1);
    }

};

const destroyData = async () => {

    try {
        await Director.deleteMany();
        await Movie.deleteMany();

        console.log('Data Destroyed!'.red.inverse);

        process.exit();

    } catch (error) {
        console.log(`${ error }`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}