import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./PrimeChart.css"


export default function PrimeChart({myData}) {
  
  // const [unlimitedData, setUnlimitedData] = useState();
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  

  let tempData = myData?.map((pdata) => pdata.temperature);
  let humData = myData?.map((pdata) => pdata.humidity);
  let dateData = myData?.map((pdata) => pdata.record_date);
  
 
  // useEffect(() => {
  //   // setInterval(() => {
  //     fetch("http://localhost:3000/")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const plotData = data.slice(data.length-6, data.length);
  //         localStorage.setUnlimitedData(plotData, JSON.stringify(plotData));
  //       });
  //   // }, "10000");
  // }, []);

  useEffect(() => {
    setInterval(() => {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--text-color");
      const textColorSecondary = documentStyle.getPropertyValue(
        "--text-color-secondary"
      );
      // const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
      const data = {
        labels: dateData,
        // labels: [1,2,3,4,5,6,7,8,9,10,11,12],
        datasets: [
          {
            label: "Temperature",
            data: tempData,
            fill: true,
            borderColor: documentStyle.getPropertyValue("--blue-500"),
            tension: 0.4,
            // borderColor: documentStyle.getPropertyValue('--teal-500')
          },
          {
            label: "Humidity",
            data: humData,
            fill: false,
            borderColor: documentStyle.getPropertyValue("--cyan-50"),
            tension: 0.4,
            backgroundColor: 'rgba(255,167,38,0.2)'
          },
        ],
      };
      const options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            // ticks: {
            //   color: textColorSecondary,
            // },
            // grid: {
            //   color: surfaceBorder,
            // },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            // grid: {
            //   color: surfaceBorder,
            // },
          },
        },
      };

      setChartData(data);
      setChartOptions(options);
    }, "10000");
  }, [myData]);

  return (
    <>
     {myData && (
    <div className="card">
     
        <Chart
          type="line"
          data={chartData}
          options={chartOptions}
          className="w-full md:w-30rem"
        />
    </div>
     )}
   
    </>
  );
}
