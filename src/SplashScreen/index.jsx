import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import Color from "../Color";

const SplashScreen = styled(motion.div)`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${Color.Black};
  z-index: 100;
`;

const SplashImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-image: url(/assets/image/covid.png);
  background-size: contain;
  background-repeat: no-repeat;
`;

const SplashText = styled.div`
  margin-top: 5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${Color.White};
`;

const SplashCR = styled.div`
  font-size: 0.8rem;
  color: gray;
  margin-top: 10rem;
  color: ${Color.White};
`;

const SplashScreenComponent = ({ isShow }) => {
  return (
    <AnimatePresence>
      {isShow && (
        <SplashScreen
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, duration: 2 }}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 2 }}
          >
            <SplashImage />
          </motion.div>
          <SplashText>COVID-19 Tracker</SplashText>
          <SplashCR>Created by Gabriel Ivan Setyaputra</SplashCR>
        </SplashScreen>
      )}
    </AnimatePresence>
  );
};

export default SplashScreenComponent;
