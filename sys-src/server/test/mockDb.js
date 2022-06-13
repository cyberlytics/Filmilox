const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Controller = require('../controller/Controller');
const Review = require('../models/reviewModel');

let mockDb;

const connect = async () => {
    mockDb = await MongoMemoryServer.create();
    const mockDbUri = await mockDb.getUri();
    const mongooseOpts = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(mockDbUri, mongooseOpts);
};

const closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mockDb.stop();
};

const clearDatabase = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        await collections[key].deleteMany();
    }
};

const addTestMoviesToDatabase = async () => {
    await Controller.addTestMovies();
    const movie = new Movie({
        _id: '507f1f77bcf86cd799439010',
        title: 'Test movie',
        description: 'Description of the test movie.',
        release: new Date('1/1/2001'),
        trailer: 'youtube link',
        image: 'image id',
        rating: 0,
    });
    await movie.save();
};

const addTestReviewToDatabase = async () => {
    const review = new Review({
        movie: '507f1f77bcf86cd799439011',
        user: '507f1f77bcf86cd799439012',
        rating: 5,
        comment: 'I am a test, I test things',
    });
    await review.save();
};

module.exports = {
    connect,
    closeDatabase,
    clearDatabase,
    addTestMoviesToDatabase,
    addTestReviewToDatabase,
};
