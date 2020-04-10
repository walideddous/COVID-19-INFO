import mapboxgl from "mapbox-gl";
import React, { Component } from "react";
import styles from "./map.module.css";
import config from "../../../config/config.json";

import { fetchLongLat } from "../../../api";

class MapCorona extends Component {
  async componentDidMount() {
    mapboxgl.accessToken = config.TOKEN;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v10",
      zoom: 1.5,
      center: [0, 20],
    });

    const res = await fetchLongLat();
    const countriesInfo = res.data.map((el) => el.countryInfo);
    countriesInfo.map((country) => {
      new mapboxgl.Marker({
        draggable: true,
      })
        .setLngLat([country.long, country.lat])
        .addTo(map);
    });
  }

  render() {
    return (
      <div
        className={styles.container}
        ref={(el) => (this.mapContainer = el)}
      ></div>
    );
  }
}

export default MapCorona;
