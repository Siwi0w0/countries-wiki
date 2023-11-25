const request = require("supertest");
const server = require("../server"); // Adjust the path accordingly

describe("GET /api/search/:name", () => {
  test("It should return country information for a valid country name", async () => {
    const response = await request(server).get("/api/search/eesti");

    expect(response.body).toHaveProperty("countryInfo"); // Assuming response structure has 'countryInfo'
  });

  test("It should return 404 for an invalid country name", async () => {
    const response = await request(server).get(
      "/api/search/invalidcountryname"
    );

    expect(response.statusCode).toBe(404);
  });
});

afterAll((done) => {
  // Cleanup, close the server after all tests
  server.close(done);
});
