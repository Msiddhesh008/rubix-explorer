import {
  border,
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import LineChart from "../components/Doughnut/LineChart";
import AmountCard from "../components/AmountCard/AmountCard";
import SwitchCharts from "../components/SwitchBtn/SwitchCharts";
import LatestTransactions from "../components/LatestTransactions/LatestTransactions";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import bannerImage from "../assets/images/bannerImg.png";

const Home = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={colorMode === "light" ? "#fff" : "none"}
        backgroundImage={colorMode !== "light" ? `url(${bannerImage})` : "none"}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
      >
        <VStack mb={"5rem"}>
          <Container maxW="container.sm" position={"relative"}>
            <Box display={"flex"} alignItems={"center"} mt={"10rem"}>
              <InputGroup
                width={"100%"}
                size="sm"
                bg={colorMode === "light" ? "light.100" : "#393939"}
                // border={"none"}
                rounded={5}
              >
                <Input
                  roundedLeft={8}
                  w={"77%"}
                  border={`1px solid ${
                    colorMode === "light" ? "#230A79" : "#393939"
                  }`}
                  h={"42px"}
                  type="search"
                  placeholder="Search by Transaction hash, token hash , DID or smart contract"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  _placeholder={colorMode === "light" ? "red" : "red"}
                  _focusVisible={{
                    borderColor:
                      colorMode === "light" ? "none" : "1px solid #230A79",
                  }}
                />
                <Button
                  zIndex={99}
                  h={"42px"}
                  position={"absolute"}
                  fontWeight={400}
                  right={"0"}
                  top={"0"}
                  fontSize={"sm"}
                  rounded={0}
                  border={`1px solid ${
                    colorMode === "light" ? "#230A79" : "#393939"
                  }`}
                  borderLeft={0}
                  borderRight={0}
                  bg={colorMode === "light" ? "transparent" : "#565252"}
                  _hover={{
                    border: `1px solid ${
                      colorMode === "light" ? "#230A79" : "#393939"
                    }`,
                    outline: "0px",
                  }}
                  _focus={{ outline: "none" }}
                >
                  Generate short url
                </Button>
              </InputGroup>
              <Box
                pointerEvents="none"
                position={"inherit"}
                right={"0"}
                h={"42px"}
                roundedRight={7}
                w={"42px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bg={colorMode === "light" ? "light.100" : "#393939"}
                color={colorMode === "light" ? "#230A79" : "#fff"}
                border={`1px solid ${
                  colorMode === "light" ? "#230A79" : "#393939"
                }`}
              >
                <IoSearch fontSize={"20px"} />
              </Box>
            </Box>
          </Container>
        </VStack>
        <AmountCard />
        <Container maxW="6xl" p={"5rem 1rem"}>
          <Box
            p={5}
            rounded={10}
            bg={colorMode === "light" ? "#DEDBEB47" : "#232127"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Heading fontSize={"md"}>Transaction History</Heading>
              <SwitchCharts
                isSwitchOn={isSwitchOn}
                setIsSwitchOn={setIsSwitchOn}
              />
            </Box>
            <LineChart />
          </Box>
        </Container>
      </Box>
      <Box p={"5rem 0"} bg={colorMode === "light" ? "light.100" : "#101015"}>
        <Container
          maxW="6xl"
          color="white"
          display={"flex"}
          justifyContent={"space-between"}
          mb={6}
        >
          <Heading
            fontSize={"md"}
            fontWeight={500}
            color={colorMode === "light" ? "#000" : "#fff"}
          >
            Latest Transactions
          </Heading>
          <Link
            to=""
            style={{
              fontSize: "14px",
              color: colorMode === "light" ? "#000" : "#fff",
            }}
          >
            View all
          </Link>
        </Container>
        <LatestTransactions />
      </Box>
    </>
  );
};

export default Home;
