import React, { useEffect, useState } from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

// OR

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");
  
  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    getData();
  },[])

  const countryName = async (fetchedCountry) => {
    const data = await fetchData(fetchedCountry);
    setData(data);
    setCountry(fetchedCountry);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker getCountryName={countryName} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
