import React from "react";
import {
  Stack,
  Box,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const SwitchCharts = ({ isSwitchOn, setIsSwitchOn }) => {

  const { colorMode, toggleColorMode } = useColorMode();

    const switch_onChange_handle = () => {
        setIsSwitchOn(!isSwitchOn);
      };
    

  return (
    <Box>
      <Stack align="center" direction="row" spacing={4}>
        <Box
         bg={colorMode === "light" ? "#fff" : "#27262B"}
         cursor={"pointer"}
          display="flex"
          justifyContent="normal"
          alignItems="center"
          width="130px"
          height="40px"
          borderRadius="10px"
          // backgroundColor={"#27262B"}
          onClick={switch_onChange_handle}
          position="relative"
          transition="background-color 0.2s"
          _before={{
            content: '""',
            position: "absolute",
            width: "40px",
            height: "25px",
            borderRadius: "10px",
            backgroundColor: colorMode === "light" ? "#DEDBEB" : "#fff", // Correct usage of backgroundColor
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            transform: isSwitchOn ? "translateX(80px)" : "translateX(0)",
            transition: "transform 0.2s",
            left: "4px",
            top: "7px",
          }}
          
        >
          <Text
            color={colorMode === "light" ? "#000" : "#ccc"}
            fontWeight="400"
            zIndex={1}
            position="absolute"
            mb={0}
            // color={isSwitchOn ? "#A9A9A9" : "#A9A9A9"}
            left={isSwitchOn ? "10px" : "auto"}
            right={isSwitchOn ? "auto" : "10px"}
          >
            {isSwitchOn ? "Monthly" : "Daily"}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default SwitchCharts;
