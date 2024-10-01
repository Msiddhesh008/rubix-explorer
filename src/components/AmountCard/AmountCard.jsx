import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaFileAlt, FaShoppingCart } from "react-icons/fa";
import { FaClipboard, FaGlobe, FaWallet } from "react-icons/fa6";
import { PiWalletFill } from "react-icons/pi";

const AmountCard = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const statsData = [
    {
      label: "RBT Price",
      value: "$53,000",
      icon: <FaWallet color="white" fontSize={"20px"} />,
    },
    {
      label: "Transaction",
      value: "2,300",
      icon: <FaGlobe color="white" fontSize={"20px"} />,
    },
    {
      label: "DID count",
      value: "+3,052",
      icon: <FaFileAlt color="white" fontSize={"20px"} />,
    },
  ];

  const statsDataFour = [
    {
      label: "Total Supply",
      value: "$173,000",
      icon: <FaShoppingCart color="white" fontSize={"20px"} />,
    },
    {
      label: "Circulating Supply",
      value: "$173,000",
      icon: <FaShoppingCart color="white" fontSize={"20px"} />,
    },
    {
      label: "Pledged RBT",
      value: "$173,000",
      icon: <FaShoppingCart color="white" fontSize={"20px"} />,
    },
    {
      label: "Pledged RBT",
      value: "$173,000",
      icon: <FaShoppingCart color="white" fontSize={"20px"} />,
    },
  ];

  return (
    <VStack>
      <Container maxW="4xl">
        <Grid
          templateColumns="repeat(3, 2fr)"
          gap={4}
          bg={colorMode === "light" ? "light.100" : "black.900"}
          justifyContent="center"
          alignItems="center"
        >
          {statsData.map((item, index) => (
            <GridItem
              key={index}
              bg={
                colorMode === "light"
                  ? "#230A7926"
                  : "linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 1.5) 91.2%)"
              }
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={3}
              rounded={10}
            >
              <Box>
                <Text
                  fontSize={"sm"}
                  color={colorMode === "light" ? "#230A79" : "#A0AEC0"}
                >
                  {item.label}
                </Text>
                <Text
                  fontSize={"sm"}
                  color={colorMode === "light" ? "#230A79" : "#fff"}
                >
                  {item.value}
                </Text>
              </Box>
              <Box
                backgroundColor={"#4023A6"}
                w={30}
                h={30}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                rounded={10}
              >
                {item.icon}
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Container maxW="6xl">
        <Grid
          templateColumns="repeat(4, 2fr)"
          gap={4}
          bg={colorMode === "light" ? "light.100" : "black.900"}
          justifyContent="center"
          alignItems="center"
        >
          {statsDataFour.map((item, index) => (
            <GridItem
              key={index}
              bg={
                colorMode === "light"
                  ? "#230A7926"
                  : "linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 1.5) 91.2%)"
              }
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={3}
              rounded={10}
            >
              <Box>
                <Text
                  fontSize={"sm"}
                  color={colorMode === "light" ? "#230A79" : "#A0AEC0"}
                >
                  {item.label}
                </Text>
                <Text
                  fontSize={"sm"}
                  color={colorMode === "light" ? "#230A79" : "#fff"}
                >
                  {item.value}
                </Text>
              </Box>
              <Box
                backgroundColor={"#4023A6"}
                w={30}
                h={30}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                rounded={10}
              >
                {item.icon}
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </VStack>
  );
};

export default AmountCard;
