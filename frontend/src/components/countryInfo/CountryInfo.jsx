import React, { useState } from "react";
import "./country-info.css";

const CountryInfo = ({ data }) => {
  if (!data || !data.countryInfo) {
    return null;
  }

  const { name, fullName, code, capital, region, area, timezone, languages } =
    data.countryInfo;

  // Get flag image URL from flagcdn.com
  const flagURL = `https://flagcdn.com/w320/${code.toLowerCase()}.png`;

  return (
    <container className="countryinfo">
      <div className="country-info-card">
        <h2 className="country-name">{name}</h2>
        <div className="country-info-grid">
          <ul className="info-list">
            <li className="info-detail">
              <label className="info-label">Full name: </label>{fullName}
            </li>
            <li className="info-detail">
              <label className="info-label">Code: </label>
              {code}
            </li>
            <li className="info-detail">
              <label className="info-label">Capital: </label>
              {capital.join(", ")}
            </li>
            <li className="info-detail">
              <label className="info-label">Region: </label>
              {region}
            </li>
            <li className="info-detail">
              <label className="info-label">Area: </label>
              {area}
            </li>
            <li className="info-detail">
              <label className="info-label">Timezone: </label>
              {timezone}
            </li>
            <li className="info-detail">
              <label className="info-label">Language: </label>
              {Object.values(languages).join(", ")}
            </li>
          </ul>

          {/* Display flag as an image */}
          <img src={flagURL} alt={`Flag of ${name}`} className="country-flag" />
        </div>
      </div>
    </container>
  );
};

export default CountryInfo;
