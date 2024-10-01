/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Box, ScaleFade, SlideFade } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const DefaultLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("light", true)
  });

  // console.log(localStorage?.getItem("light"));
  

  return (
    <Box
    //  bg={"red"}

    //  bg={localStorage?.getItem("light") === true ?"white" : "black"}
     >
      <NavBar />
      <SlideFade
        key={location.pathname}
        initialScale={0.9}
        finalScale={1.2}
        in={true}
        transition={{
          enter: {
            duration: 0.5,
            delay: 0.1,
          },
        }}
      >
        {children}
      </SlideFade>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
