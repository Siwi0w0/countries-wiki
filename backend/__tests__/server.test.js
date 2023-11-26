const request = require("supertest");
const server = require('../server.js');

describe("GET /api/search/:name", () => {
  test('should return country information for a valid country name', async () => {
    try {
      const response = await request(server).get('/api/search/eesti');
      const countryInfo = response.body.countryInfo;
  
      // Ensure that the response has the expected structure
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('countryInfo');
  
      // Check specific properties of countryInfo
      expect(countryInfo).toHaveProperty('name');
      expect(countryInfo).toHaveProperty('fullName');
      expect(countryInfo).toHaveProperty('code');
      expect(countryInfo).toHaveProperty('capital');
      expect(countryInfo).toHaveProperty('region');
      expect(countryInfo).toHaveProperty('languages');
      expect(countryInfo).toHaveProperty('area');
      expect(countryInfo).toHaveProperty('timezone');
  
      // Optionally, check specific values of properties
      expect(countryInfo.name).toBe('Estonia'); // Replace with the expected name
      expect(countryInfo.capital).toBe('Tallinn'); // Replace with the expected capital

    } catch (error) {
      // Handle Axios errors here
      console.error('Axios error:', error.message);
    }
  });

  test('should return 404 for an invalid country name', async () => {
    try {
      const response = await request(server).get('/api/search/invalidcountryname');

      expect(response.statusCode).toBe(404);
    } catch (error) {
      // Handle Axios errors here
      console.error('Axios error:', error.message);
    }
  });

  afterAll(async () => {
    // Cleanup, close the server after all tests
    await server.close();
  });
});
