import React from "react";
import "./country-info.css";

const CountryInfo = ({ data }) => {

  if (!data || !data.countryInfo) {
    console.error("No data received.");
    return null;
  }

  const { name, fullName, code, capital, region, area, timezone, languages } =
    data.countryInfo;

  // Get flag image URL from flagcdn.com
  const flagURL = `https://flagcdn.com/w320/${code.toLowerCase()}.png`;

  return (
    <>
    <div className="countryinfo-container">
    <div className="country-info-card" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgb(255, 255, 255)', padding: '2rem', borderRadius: '20px' }}>
        <h2 className="country-name">{name}</h2>
        <div className="country-info-grid">
          <ul className="info-list">
            <li className="info-detail">
              <label className="info-label">Full name: </label>
              {fullName}
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
          <img src={flagURL} alt={`Flag of ${name}`} className="country-flag" />
        </div>
      </div>
    </div>
    </>
  );
};

export default CountryInfo;
