const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

//Create endpoint for fetching country info
app.get("/api/search/:name", async (req, res) => {
  try {
    console.log("Request received");
    const countryName = req.params.name;

    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );

    console.log("Response from external API:", response.data);

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

    // Send country info back to the frontend as JSON
    res.json({ countryInfo });
  } catch (error) {
    console.error(`Error processing request for country name: ${req.params.name}`);
    console.error(error);

    // Handle specific error cases
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ error: "Invalid country name" });
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});