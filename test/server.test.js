const request = require('supertest');
const app = require('./client/src/app');

describe('GET /country/:name', () => {
  test('It should return country information for a valid country name', done => {
    request(app)
    .get('/country/eesti')
    .then(response => {
      expect(response.statusCode).toBe(200);
      done();
    });
    done();
  });
});