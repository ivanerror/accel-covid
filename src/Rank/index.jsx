import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Color from "../Color";

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: end;
  align-items: center;
  margin: 1rem;
`;

const PageDetail = styled.div`
  font-size: 0.7rem;
  color: ${Color.LightGrey};
`;

const RankTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${Color.White};
  letter-spacing: 0.1rem;
  margin: 0 auto;
  text-align: center;
`;

const DirectionButton = styled(motion.button)`
  display: flex;
  color: ${(props) => (props.disabled ? Color.Gray : Color.White)};
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.disabled ? Color.Gray : Color.Black)};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const CovidRank = () => {
  const [countries, setCountries] = useState([]);
  const [offset, setOffset] = useState({
    offset: 0,
    showed: 10,
  });

  const nowPage = useMemo(() => {
    return Math.floor(offset.offset / offset.showed) + 1;
  }, [offset]);

  const maxPage = useMemo(() => {
    return Math.ceil(countries.length / offset.showed);
  }, [countries, offset]);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        console.log(res.data);
        setCountries(res.data);
      })
      .catch(console.log);
  }, []);

  const sortedCountries = useMemo(() => {
    return countries.sort((a, b) => b.cases - a.cases);
  }, [countries]);

  const showedCountries = useMemo(() => {
    return sortedCountries.slice(offset.offset, offset.offset + offset.showed);
  }, [sortedCountries, offset]);

  // Random Color generator
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const ChartWrapper = styled.div`
    height: 100vh;
  `;

  return (
    <>
      <RankTitle>COVID 19 CASES RANK</RankTitle>
      <ChartWrapper>
        <Chart
          type="bar"
          options={{
            indexAxis: "y",
            tooltips: {
              mode: "index",
            },
            maintainAspectRatio: false,
          }}
          data={{
            labels: showedCountries.map(
              (country, index) =>
                `#${index + 1 + offset.offset} ${country.country}`
            ),
            datasets: [
              {
                label: "Cases",
                data: showedCountries.map((country) => country.cases),
                backgroundColor: randomColor(),
              },
              {
                label: "Recovered",
                data: showedCountries.map((country) => country.recovered),
                backgroundColor: randomColor(),
              },
              {
                label: "Deaths",
                data: showedCountries.map((country) => country.deaths),
                backgroundColor: randomColor(),
              },
            ],
          }}
        />
      </ChartWrapper>
      <ButtonWrapper>
        <PageDetail>
          page {nowPage} of {maxPage}
        </PageDetail>
        <DirectionButton
          whileTap={{
            scale: ({ disabled }) => (disabled ? 1 : 0.9),
          }}
          disabled={offset.offset === 0}
          onClick={() => {
            setOffset((offset) => ({
              ...offset,
              offset: offset.offset - offset.showed,
            }));
          }}
        >
          Back
        </DirectionButton>
        <DirectionButton
          whileTap={{
            scale: ({ disabled }) => (disabled ? 1 : 0.9),
          }}
          disabled={offset.offset + offset.showed >= countries.length}
          onClick={() => {
            setOffset((offset) => ({
              ...offset,
              offset: offset.offset + offset.showed,
            }));
          }}
        >
          Next
        </DirectionButton>
      </ButtonWrapper>
    </>
  );
};

export default CovidRank;
