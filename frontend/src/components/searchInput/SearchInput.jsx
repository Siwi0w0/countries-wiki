import React, {useState} from 'react';
import axios from 'axios';

//create a search component
const SearchInput = ({onSearchChange}) => {
//    const [countryInfo, setCountryInfo] = useState({});
   const [input, setInput] = useState('');

   //handle onChange event
   const handleSearch = async (e) => {
     e.preventDefault();

     try {
          input.toString();
          const response = await axios.get(`/api/search/${encodeURIComponent(input)}`);

          //pass data to parent componet
          onSearchChange(response.data);
     } catch (error) {
          console.error('Error fetching data', error);
     };

  }

   return (
        <form onSubmit={handleSearch}>
        <input
        type="text"
        placeholder="Search a country......"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
  </form>
    );
}

export default SearchInput;