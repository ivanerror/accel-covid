import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "./Navbar";
import Container from "./Container";
import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Color from "./Color";

import Home from "./Home";
import About from "./About";
import Rank from "./Rank";

const BodyWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  background-color: #121212;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  min-height: 100vh;
`;

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
          <BodyWrapper>
            <Navbar />
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rank" element={<Rank />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Container>
          </BodyWrapper>
        </>
      )}
    </>
  );
}

export default App;
