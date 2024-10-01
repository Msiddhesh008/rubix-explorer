/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Container,
  Icon,
  Image,
  Stack,
  Switch,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { Outlet, Link, useLocation, NavLink } from "react-router-dom";
import logo from "../../assets/images/rubix.png";
import logoLight from "../../assets/images/light-logo.png";
import { useEffect, useState } from "react";
import SwitchBtn from "../SwitchBtn/SwitchBtn";

const NavBar = () => {
  // const [isHoveredCommunity, setIsHoveredCommunity] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const theme = localStorage?.getItem("light");

  return (
    <>
      <Box
        position={"absolute"}
        zIndex={"999"}
        width={"100%"}
        top={0}
        left={0}
        id="navbar"
        // bg={colorMode === "light" ? "light" : "black.900"}
        color={colorMode === "light" ? "light" : "black.900"}
        padding={"22px 0px"}
        // borderBottom={"1px solid #ccc"}
        borderBottom={colorMode === "light" ? "1px solid #ccc" : "none"}
      >
        <Container maxW="6xl">
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"100%"}
          >
            <Link to="/">
              <Image
                src={colorMode === "light" ? logoLight : logo}
                width={"120px"}
              />
            </Link>

            <Box display={"flex"} alignItems={"center"} gap={7}>
              <NavLink
                to="/mainNet"
                style={({ isActive }) => ({
                  fontSize: "14px",
                  fontWeight: "400",
                  borderBottom: isActive ? "1px solid #DE858E" : "0px solid #fff", // Active style for MAIN NET
                })}
              >
                MAIN NET
              </NavLink>
              <NavLink
                to="/subnet"
                style={({ isActive }) => ({
                  fontSize: "14px",
                  fontWeight: "400",
                  borderBottom: isActive ? "1px solid #DE858E" : "0px solid #fff", // Active style for SUBNETS
                })}
              >
                SUBNETS
              </NavLink>
              <SwitchBtn
                isSwitchOn={isSwitchOn}
                setIsSwitchOn={setIsSwitchOn}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      {/* <Box h={"74px"}></Box> */}
    </>
  );
};

export default NavBar;
