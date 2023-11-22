import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/search/Search.js';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(()=> {
    fetch('/country').then(
      response => response.json()
    ).then (
      data => {
        setBackendData(data);
      }
    )
  }, [])

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
