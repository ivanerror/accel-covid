import React from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import styled from "@emotion/styled";

const ChartContainer = styled.div`
  margin: 1rem 0;
`;

const CovidLineChart = ({ data, isLoading }) => {
  if (isLoading) return null;

  return (
    <ChartContainer>
      <Chart
        type="line"
        datasetIdKey="id"
        data={{
          labels: Object.keys(data.cases),
          datasets: [
            {
              label: "Confirmed",
              data: data.cases,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
            {
              label: "Recovered",
              data: data.recovered,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
            {
              label: "Deaths",
              data: data.deaths,
              backgroundColor: "rgba(255, 206, 86, 0.2)",
              borderColor: "rgba(255, 206, 86, 1)",
              borderWidth: 1,
            },
          ],
        }}
      />
    </ChartContainer>
  );
};

export default CovidLineChart;
