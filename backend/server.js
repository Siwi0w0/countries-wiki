const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;
const app = express();

//Create endpoint for fetching country info
app.get("/country/:name", async(req, res) => {
  try {
    //Fetch country info from API
    const response = await axios.get(`https://restcountries.com/v3.1/name/eesti`);
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
      currency: {
        code: Object.keys(currencyData)[0], // Assuming there's only one currency, get the first key
        name: currencyData[Object.keys(currencyData)[0]].name,
        symbol: currencyData[Object.keys(currencyData)[0]].symbol,
      },
      flag: countryData.name.common,
      timezone: countryData.timezones[0],
    }

    console.log(countryInfo);

    // Send contry info back to the frontend as JSON
    res.json({ countryInfo: countryInfo});

  } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
