import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "./Navbar";
import Container from "./Container";
import CovidStats from "./CovidStats";
import ChartStats from "./ChartStats";
import axios from "axios";

function App() {
  const [covidIndonesia, setCovidIndonesia] = useState({});
  const [covidGlobal, setCovidGlobal] = useState({});
  const [covidIndonesiaHistorical, setCovidIndonesiaHistorical] = useState([]);
  const [covidGlobalHistorical, setCovidGlobalHistorical] = useState([]);
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 2000);
  }, []);

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
        console.log(res.data);
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
        setCovidIndonesiaHistorical(res.data);
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
        setCovidGlobalHistorical(res.data);
      })
      .catch((err) => {
        setCovidGlobalHistorical(err);
      });
  }, []);

  return (
    <>
      <SplashScreen isShow={splashScreen} />
      {!splashScreen && (
        <>
          <Container>
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
            <ChartStats data={covidIndonesiaHistorical.timeline} />
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
            <ChartStats data={covidGlobalHistorical} />
          <Navbar />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
