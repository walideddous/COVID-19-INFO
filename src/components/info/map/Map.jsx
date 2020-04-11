import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup, FullscreenControl } from "react-map-gl";
import CuntUp from "react-countup";
import config from "../../../config/config.json";
import styles from "./map.module.css";

import { fetchLongLat } from "../../../api";

const MapCorona = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [viewport, setViewport] = useState({
    width: "80vw",
    height: "80vh",
    latitude: 33,
    longitude: 9,
    zoom: 4,
  });

  useEffect(() => {
    const fetchCountriesInfo = async () => {
      setCountries(await fetchLongLat());
    };
    fetchCountriesInfo();
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      className={styles.container}
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
      onClick={() => {
        setSelectedCountry(null);
      }}
      mapStyle={config.MapBox}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      {countries.data &&
        countries.data.map((country, i) => (
          <Marker
            key={i}
            latitude={country.countryInfo.lat}
            longitude={country.countryInfo.long}
          >
            <button
              className={styles.markerButton}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCountry(country);
              }}
            >
              <img
                className={styles.countryFlag}
                src={country.countryInfo.flag}
                alt='flag'
              />
            </button>
          </Marker>
        ))}
      <div style={{ position: "absolute", right: 0 }}>
        <FullscreenControl container={document.getElementById("root")} />
      </div>
      {selectedCountry && (
        <Popup
          latitude={selectedCountry.countryInfo.lat}
          longitude={selectedCountry.countryInfo.long}
          onClose={() => {
            setSelectedCountry(null);
          }}
        >
          <div>
            <h2>{selectedCountry.country}</h2>
            <p>
              Total Tests:
              <CuntUp
                start={0}
                end={selectedCountry.tests}
                duration={2.5}
                separator=','
              />
            </p>
            <p>
              Total Infected:
              <CuntUp
                start={0}
                end={selectedCountry.cases}
                duration={2.5}
                separator=','
              />
            </p>
            <p>
              Today Infected :
              <CuntUp
                start={0}
                end={selectedCountry.todayCases}
                duration={2.5}
                separator=','
              />
            </p>
            <p style={{ color: "red" }}>
              Total deaths:
              <CuntUp
                start={0}
                end={selectedCountry.deaths}
                duration={2.5}
                separator=','
              />
            </p>
            <p>
              Today deaths:
              <CuntUp
                start={0}
                end={selectedCountry.todayDeaths}
                duration={2.5}
                separator=','
              />
            </p>
            <p style={{ color: "green" }}>
              Recovered:
              <CuntUp
                start={0}
                end={selectedCountry.recovered}
                duration={2.5}
                separator=','
              />
            </p>
            <p>
              Active:
              <CuntUp
                start={0}
                end={selectedCountry.active}
                duration={2.5}
                separator=','
              />
            </p>
            <p>
              Critical:
              <CuntUp
                start={0}
                end={selectedCountry.critical}
                duration={2.5}
                separator=','
              />
            </p>
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default MapCorona;
