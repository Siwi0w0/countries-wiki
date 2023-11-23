const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;
const app = express();

//Create endpoint for fetching country info
app.get("/api/search", async(req, res) => {
  try {
    console.log("Request received");
    
    const query = req.query.query; //Get the query string from the request
    const response = await axios.get(`https://restcountries.com/v3.1/name/${query}`);
    console.log(response);

    if (!response.data || !response.data[0]) {
      throw new Error('Invalid response format');
    }

    const countryData = response.data[0];
    const currencyData = countryData.currencies;

    //Extract country info from the response
    const countryInfo = {
      name: countryData.name.common,
      fullName: countryData.name.official,
      code: countryData.cca2,
      capital: countryData.capital,
      region: countryData.region,
      languages: countryData.languages,
      area: countryData.area,
      flag: countryData.name.common,
      timezone: countryData.timezones[0],
    }

    console.log(countryInfo);

    // Send contry info back to the frontend as JSON
    res.json({ countryInfo: countryInfo });

  } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
