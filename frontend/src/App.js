import React, { useState } from "react";
import "./App.css";
import SearchInput from "./components/searchInput/SearchInput";
import CountryInfo from "./components/countryInfo/CountryInfo";

function App() {
  const [data, setData] = useState(null);

  const handleSearchChange = (newData) => {
    setData(newData);
  };

  return (
    <div className="App">
      <SearchInput onSearchChange={handleSearchChange} />
      <CountryInfo data={data} />
    </div>
  );
}

export default App;
