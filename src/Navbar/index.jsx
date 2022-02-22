import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Color from "../Color";
import { BiMenuAltRight } from "react-icons/bi";
import Menu from "../Menu";
import { useState } from "react";

const AppBar = styled(motion.div)`
  position: sticky;
  top: 0;
  width: 100%;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 4rem;
  background-color: ${Color.Black};
  color: ${Color.White};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
`;

const AppBarTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${Color.White};
  letter-spacing: 0.1rem;
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Color.White};
  font-size: 1.2rem;
`;

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <AppBar
      initial={{ y: "-5vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <Toolbar>
        <AppBarTitle>COVID-19 TRACKER</AppBarTitle>
        <MenuIcon onClick={() => setMenu(!menu)}>
          <BiMenuAltRight />
        </MenuIcon>
      </Toolbar>
      <Menu isShow={menu} close={() => setMenu(false)} />
    </AppBar>
  );
};

export default Navbar;
