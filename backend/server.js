const express = require("express");
const axios = require("axios");

const cors = require("cors");

// Allow all origins
app.use(cors());

// // Allow only frontend origin
// app.use(
//   cors({
//     origin: "https://countries-wiki-frontend.vercel.app",
//   })
// );

const PORT = process.env.PORT || 3001;
const app = express();

//Create endpoint for fetching country info
app.get("/api/search/:name", async (req, res) => {
  try {
    console.log("Request received");
    const countryName = req.params.name;

    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );

    if (!response.data || !response.data[0]) {
      return res.status(404).json({ error: "Country not found" });
    }

    // If everything is okay, send the data
    res.status(200).json({ countryInfo });

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

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = server;
