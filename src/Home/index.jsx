import { useEffect, useState } from "react";
import CovidStats from "../CovidStats";
import ChartStats from "../ChartStats";
import axios from "axios";

const Home = () => {
  const [covidIndonesia, setCovidIndonesia] = useState({});
  const [covidGlobal, setCovidGlobal] = useState({});
  const [covidIndonesiaHistorical, setCovidIndonesiaHistorical] = useState({
    isLoading: true,
  });
  const [covidGlobalHistorical, setCovidGlobalHistorical] = useState({
    isLoading: true,
  });

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries/id", {
        params: {
          yesterday: true,
          strict: true,
          query: true,
        },
      })
      .then((res) => {
        setCovidIndonesia(res.data);
      })
      .catch((err) => {
        setCovidIndonesia(err);
      });

    axios
      .get("https://disease.sh/v3/covid-19/all", {
        params: {
          yesterday: true,
        },
      })
      .then((res) => {
        setCovidGlobal(res.data);
      })
      .catch((err) => {
        setCovidGlobal(err);
      });

    axios
      .get("https://disease.sh/v3/covid-19/historical/indonesia", {
        params: {
          lastdays: 30,
        },
      })
      .then((res) => {
        setCovidIndonesiaHistorical({
          isLoading: false,
          data: res.data.timeline,
        });
      })
      .catch((err) => {
        setCovidIndonesiaHistorical(err);
      });

    axios
      .get("https://disease.sh/v3/covid-19/historical/all", {
        params: {
          lastdays: 30,
        },
      })
      .then((res) => {
        setCovidGlobalHistorical({
          isLoading: false,
          data: res.data,
        });
      })
      .catch((err) => {
        setCovidGlobalHistorical(err);
      });
  }, []);

  return (
    <>
      <CovidStats
        country={covidIndonesia.country}
        total={covidIndonesia.cases}
        deaths={covidIndonesia.deaths}
        recovered={covidIndonesia.recovered}
        lastUpdate={new Date(covidIndonesia.updated)}
        todayCases={covidIndonesia.todayCases}
        todayDeaths={covidIndonesia.todayDeaths}
        todayRecovered={covidIndonesia.todayRecovered}
      />
      <ChartStats
        data={covidIndonesiaHistorical.data}
        isLoading={covidIndonesiaHistorical.isLoading}
      />
      <CovidStats
        country="Global"
        total={covidGlobal.cases}
        deaths={covidGlobal.deaths}
        recovered={covidGlobal.recovered}
        lastUpdate={new Date(covidGlobal.updated)}
        todayCases={covidGlobal.todayCases}
        todayDeaths={covidGlobal.todayDeaths}
        todayRecovered={covidGlobal.todayRecovered}
      />
      <ChartStats
        data={covidGlobalHistorical.data}
        isLoading={covidGlobalHistorical.isLoading}
      />
    </>
  );
};

export default Home;
