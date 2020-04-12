import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../../api";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ info }) => {
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);
  const [dailyData, setDailyData] = useState([]);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  const lineChartPerCountry = info.length ? (
    <Line
      data={{
        labels: info[0].data.map((el) => el.Date),
        datasets: [
          {
            data: info[0].data.map((el) => el.Cases),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: info[1].data.map((el) => el.Cases),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return (
    <div className={styles.container} id='Chart'>
      {!info.length ? lineChart : lineChartPerCountry}
    </div>
  );
};

export default Chart;

// const BarChar = confirmed ? (
//   <Bar
//     data={{
//       labels: ["Infected", "Recovered", "Deaths"],
//       datasets: [
//         {
//           label: "People",
//           backgroundColor: [
//             "  rgba(0, 0, 255, 0.5)",
//             " rgba(0, 255, 0, 0.5)",
//             "  rgba(255, 0, 0, 0.5)",
//           ],
//           data: [confirmed.value, recovered.value, deaths.value],
//         },
//       ],
//     }}
//     options={{
//       legend: { display: false },
//       title: { display: true, text: `Current state in ${country}` },
//     }}
//   />
// ) : null;
