import React, {useState} from 'react';
import './App.css';
import SearchInput from './components/searchInput/SearchInput';

function App() {

  const [data, setData] = useState(null);

  const handleSearchChange = (searchData) => {
    // Update the data state with the search results
    setData(searchData);
  };

  return (
    <div className="App">
      {/* Render data if available */}
      {data && (
        <div>
          <h1>Country Information</h1>
          {/* Display data as needed */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      {/* Render your SearchInput component */}
      <SearchInput onSearchChange={handleSearchChange} />
    </div>
  );

    // <div>
    //   <SearchInput onSearchChange={(data)=>setData(data)} />
    // </div>

}

export default App;
