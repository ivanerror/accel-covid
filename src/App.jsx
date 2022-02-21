import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "./Navbar";
import Container from "./Container";
import { Routes, Route } from "react-router-dom";


import Home from "./Home";

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
            </Routes>
          </Container>
          <Navbar />
        </>
      )}
    </>
  );
}

export default App;
