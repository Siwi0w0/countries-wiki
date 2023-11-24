import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./search-input.css";

// create a search component
const SearchInput = ({ onSearchChange }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [dataFetched, setDataFetched] = useState(false);

  // handle onChange event
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      if (!input.trim()) {
        setError("Please enter a country name.");
        return;
      }

      const response = await axios.get(
        `/api/search/${encodeURIComponent(input)}`,
      );

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setError("");
        onSearchChange(response.data);
        setInput("");
        setDataFetched(true);
      }
    } catch (error) {
      setError("Error fetching data. Please try again.");
      console.error("Error:", error);
    }
  };

  // clear input field
  const handleInputChange = async (e) => {
    setInput(e.target.value);
    setError("");
    setDataFetched(false);
  };

  return (
    <container className={dataFetched ? "search-input-container data-fetched" : "search-input-container"}>
      <h1 className="title">
        Countries - Wiki
      </h1>
      <form onSubmit={handleSearch}>
      <div className="search-bar">
            <input
            type="text"
            placeholder="Search a country......"
            value={input}
            onChange={handleInputChange}
            />
            <button type="submit" className="search-btn">
                <FontAwesomeIcon icon={faSearch} style={{color: "#647187", fontSize: "2rem"}}/>
            </button>
      </div>
        {error && <p className="error-message">{error}</p>}
      </form>
    </container>
  );
};

export default SearchInput;
