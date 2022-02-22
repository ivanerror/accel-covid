import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Color from "../Color";
import { motion, AnimatePresence } from "framer-motion";
import { BiX } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import GitHubButton from "react-github-btn";

const MenuScreen = styled(motion.div)`
  position: absolute;
  display: block;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${Color.Black};
  display: flex;
  flex-direction: column;
  box-size: border-box;
`;

const MenuHeader = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuList = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(Link)`
  padding: 1rem 0;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.isActive ? Color.White : Color.LightGrey)};
  text-decoration: none;
  border-bottom: 1px solid ${Color.White};
`;

const MenuCredit = styled.div`
  margin-top: auto;
  color: ${Color.White};
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 2rem;
`;

const MenuCreditIcon = styled.a`
  color: ${Color.White};
  font-size: 1.5rem;
  text-decoration: none;
  margin: 0 0.5rem;
`;

const MenuTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${Color.White};
  letter-spacing: 0.1rem;
`;

const CloseButton = styled(motion.div)`
  color: ${Color.White};
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

const Menu = ({ isShow, close }) => {
  const location = useLocation();

  useEffect(() => {
    if (isShow) close();
  }, [location]);

  return (
    <AnimatePresence>
      {isShow && (
        <MenuScreen
          transition={{ type: "Inertia", duration: 0.5 }}
          initial={{ y: "-100vh" }}
          animate={{ y: "0" }}
          exit={{ y: "-100vh" }}
        >
          <div>
            <MenuHeader>
              <MenuTitle>Menu</MenuTitle>
              <CloseButton onClick={close}>
                <BiX />
              </CloseButton>
            </MenuHeader>
            <MenuList>
              <MenuItem to="/" isActive={location.pathname === "/"}>
                Home
              </MenuItem>
              <MenuItem to="/rank" isActive={location.pathname === "/rank"}>
                Rank
              </MenuItem>
              <MenuItem to="/about" isActive={location.pathname === "/about"}>
                About
              </MenuItem>
            </MenuList>
          </div>
          <MenuCredit>
            <p>Created by Gabriel Ivan Setyaputra</p>
            <MenuCreditIcon href="https://github.com/ivanerror" target="_blank">
              <AiFillGithub />
            </MenuCreditIcon>
            <MenuCreditIcon href="https://github.com/ivanerror" target="_blank">
              <AiFillLinkedin />
            </MenuCreditIcon>
            <MenuCreditIcon href="https://github.com/ivanerror" target="_blank">
              <AiFillInstagram />
            </MenuCreditIcon>
          </MenuCredit>
        </MenuScreen>
      )}
    </AnimatePresence>
  );
};

export default Menu;
