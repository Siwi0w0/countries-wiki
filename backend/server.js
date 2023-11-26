const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

// Enable CORS for all routes
app.use(cors());

//Create endpoint for fetching country info
app.get("/api/search/:name", async (req, res) => {
  try {
    console.log("Request received");
    const countryName = req.params.name;

    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );

    if (!response.data || !response.data[0]) {
      return res.status(404).json({ error: "Invalid Country name" });
    }

    //Extract country info from the response
    const countryData = response.data[0];
    const countryInfo = {
      name: countryData.name.common,
      fullName: countryData.name.official,
      code: countryData.cca2,
      capital: countryData.capital,
      region: countryData.region,
      languages: countryData.languages,
      area: countryData.area,
      timezone: countryData.timezones[0],
    };

    // Send contry info back to the frontend as JSON
    res.json({ countryInfo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = server;
