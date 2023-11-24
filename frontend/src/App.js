import React, { useState, useEffect } from "react";
import "./App.css";
import SearchInput from "./components/searchInput/SearchInput";
import CountryInfo from "./components/countryInfo/CountryInfo";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`api/search`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data.countryInfo))
      .catch((error) => console.error(`Error fetching data`));
  }, []);

  return (
    <div className="App">
      <SearchInput onSearchChange={(data) => setData(data)} />
      <CountryInfo data={data} />
    </div>
  );
}

export default App;
