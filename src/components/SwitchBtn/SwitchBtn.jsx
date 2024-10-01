import React from "react";
import { Stack, Switch, Icon, Box, Button, useColorMode } from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const SwitchBtn = ({ isSwitchOn, setIsSwitchOn }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <Box onClick={toggleColorMode}>
       {/* {colorMode === "light" ? "Dark" : "Light"} */}
      <Stack align="center" direction="row" spacing={4}>
        <Box
        bg={colorMode === "light" ? "#DFDFE1" : "#27262B"}
        //   as="span"
          display="flex"
          justifyContent="normal"
          alignItems="center"
          width="80px"
          height="35px"
          borderRadius="50px"
          // backgroundColor={"#27262B"}
          onClick={switch_onChange_handle}
          position="relative"
          transition="background-color 0.2s"
          _before={{
            content: '""',
            position: "absolute",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: colorMode === "light" ? "#fff" : "#D9D9D933",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            transform: isSwitchOn ? "translateX(42px)" : "translateX(0)",
            transition: "transform 0.2s",
            left: "5px",
            top:"3px"
          }}
        >
          <Icon
            color={colorMode === "light" ? "#F49E09" : "#fff"}
            as={isSwitchOn ? MdLightMode : MdDarkMode}
            // color={isSwitchOn ? "#fff" : "#fff"}
            zIndex={1}
            position="absolute"
            left={isSwitchOn ? "10px" : "auto"}
            right={isSwitchOn ? "auto" : "10px"}
            fontSize={"24px"}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default SwitchBtn;
