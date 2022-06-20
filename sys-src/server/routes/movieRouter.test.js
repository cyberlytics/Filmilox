const mockDb = require('../test/mockDb');
const app = require('../server');
const request = require('supertest');

const agent = request.agent(app);

beforeAll(async () => {
    await mockDb.connect();
    await mockDb.addTestMoviesToDatabase();
});
afterEach(async () => await mockDb.clearDatabase());
afterAll(async () => await mockDb.closeDatabase());

//"507f1f77bcf86cd799439010"
describe('tests to get a movie', () => {
    test('test valid movie Id', async () => {
        const movie = await agent.get(
            '/admin/get-movie/507f1f77bcf86cd799439020'
        );
        expect(movie.statusCode).toBe(200);
        expect(movie.body.title).toBe('Test movie');
        expect(movie.body.description).toBe('Description of the test movie.');
        expect(movie.body.release).toBe('2000-12-31T23:00:00.000Z');
        expect(movie.body.trailer).toBe('youtube link');
        expect(movie.body.image).toBe('image id');
        expect(movie.body.rating).toBe(0);
    });

    test('test invalid movie Id', async () => {
        const movie = await agent.get(
            '/admin/get-movie/507f1f77bcf86cd799439040'
        );
        expect(movie.statusCode).toBe(400);

        const errormovie = await agent.get('/admin/get-movie/1');
        expect(errormovie.statusCode).toBe(500);
    });
});
