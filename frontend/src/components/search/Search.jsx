import React, {useState} from 'react';
import axios from 'axios';

//create a search component to enable users to search for a country
const Search = () => {
   const [input, setInput] = useState('');
   const [countries, setCountries] = useState([]);
   const endpointURL = `http://localhost:3001/country/`;

   //handle onChange event
   const handleSearch = async (e) => {
    setInput(e.target.value);
    if (e.target.value !== ""){
        const response = await axios.get(`${ endpointURL}/${e.target.value}`);
        setCountries(response.data.countryInfo);

        console.log(response.data.countryInfo);
    } else {
        setCountries([]);
    }
   }

   return (
        <div>
            <input type="text" placeholder="Search for a country..." onChange={handleSearch}/>
            {countries.map((country, index) => {
                <p key= {index}>{country.name}</p>
            })}
        </div>
    );
}

export default Search;