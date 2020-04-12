import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { fetchLongLat } from "../../../api";

import styles from "./table.module.css";

const TableCountries = () => {
  useEffect(() => {
    const fetchCountriesInfo = async () => {
      setCountries(await fetchLongLat());
    };

    fetchCountriesInfo();
  }, []);
  const [countries, setCountries] = useState([]);

  console.log("countries ", countries);
  return (
    <div className={styles.container}>
      <MaterialTable
        title='COVID-19 Daily Information'
        style={{ width: "100%" }}
        columns={[
          { title: "Country", field: "country" },
          { title: "Total Infected", field: "cases", type: "numeric" },
          { title: "Today Cases", field: "todayCases", type: "numeric" },
          { title: "Deaths", field: "deaths", type: "numeric" },
          { title: "Today Deaths", field: "todayDeaths", type: "numeric" },
          { title: "Recovered", field: "recovered", type: "numeric" },
          { title: "Tests", field: "tests", type: "numeric" },
        ]}
        data={countries.data}
        options={{
          search: true,
        }}
      />
    </div>
  );
};

export default TableCountries;
