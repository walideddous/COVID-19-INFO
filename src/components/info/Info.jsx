import React, { useEffect, useState, Fragment } from "react";
import Cards from "./Cards/Cards";
import Chart from "./Chart/Chart";
import CountryPicker from "./CountryPicker/CountryPicker";
import MapCorona from "./map/Map";
import Contact from "../home/components/Contact";
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
  }, []);

  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  const handleChangeCountry = async (country) => {
    const res = await fetchData(country);
    setData(res);
    setCountry(country);
  };
  return (
    <Fragment>
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt='COVID-19' />
        <CountryPicker handleChangeCountry={handleChangeCountry} />
        <Cards data={data} />
        <MapCorona country={country} />
        <Chart data={data} country={country} />
      </div>
      <Contact />
    </Fragment>
  );
};

export default Info;
