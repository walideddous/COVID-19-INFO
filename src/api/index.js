import axios from "axios";
import config from "../config/config.json";

const url = config.APIEndPoint;
const urlcountries = config.APIEndPointcountries;
const urlcountrydaily = config.APIEndPointDaily;

export const fetchData = async (country) => {
  let changedUrl = url;

  if (country) {
    changedUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changedUrl);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (err) {
    console.log("can't fetch Data");
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (err) {
    console.log("can't fetch Data");
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (err) {
    console.log("can't fetch Data");
  }
};

export const fetchLongLat = async () => {
  try {
    const response = await axios.get(`${urlcountries}`);
    return response;
  } catch (err) {
    console.log("cant catch Data", err);
  }
};

export const fetchDailyDataPerCountry = async (country) => {
  try {
    const resConfirmed = await axios.get(
      `${urlcountrydaily}/${country}/status/confirmed`
    );
    const resDeaths = await axios.get(
      `${urlcountrydaily}/${country}/status/deaths`
    );
    const resRecovered = await axios.get(
      `${urlcountrydaily}/${country}/status/recovered`
    );
    const response = [resConfirmed, resDeaths, resRecovered];
    return response;
  } catch (err) {
    console.log("cant catch Data", err);
  }
};
