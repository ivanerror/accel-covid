import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const ChartStats = ({ data }) => {
  const chartOption = {
    chart: {
      id: "basic-bar",
      foreColor: "#fff",
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    xaxis: data.map((item) => item.Date),
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      style: {
        colors: ["#000", "#000", "#000"],
      },
    },
    colors: ["#F44336", "#E91E63", "#9C27B0"],
  };

  const chartSeries = [
    {
      name: "Confirmed",
      data: data.map((item) => item.Confirmed),
    },
    {
      name: "Recovered",
      data: data.map((item) => item.Recovered),
    },
    {
      name: "Deaths",
      data: data.map((item) => item.Deaths),
    },
  ];

  console.log(data);

  return <Chart options={chartOption} series={chartSeries} />;
};

export default ChartStats;
