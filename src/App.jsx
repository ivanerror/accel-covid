import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "./Navbar";
import Container from "./Container";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Rank from "./Rank"

function App() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 2000);
  }, []);

  return (
    <>
      <SplashScreen isShow={splashScreen} />
      {!splashScreen && (
        <>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rank" element={<Rank />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Container>
          <Navbar />
        </>
      )}
    </>
  );
}

export default App;
