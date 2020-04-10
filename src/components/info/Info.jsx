import React, { useEffect, useState } from "react";
import Cards from "./Cards/Cards";
import Chart from "./Chart/Chart";
import CountryPicker from "./CountryPicker/CountryPicker";
import MapCorona from "./map/Map";
import coronaImage from "../../img/corona.png";

// Api fetch data
import { fetchData } from "./../../api";
// Css
import styles from "./info.module.css";

const Info = () => {
  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData());
    };

    fetchAPI();
  }, [fetchData]);

  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  const handleChangeCountry = async (country) => {
    const res = await fetchData(country);
    setData(res);
    setCountry(country);
  };
  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt='COVID-19' />
      <Cards data={data} />
      <CountryPicker handleChangeCountry={handleChangeCountry} />
      <MapCorona country={country} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default Info;
