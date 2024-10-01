import { Box, Container, Grid, GridItem, Heading, HStack, Select, Text, useColorMode } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LatestTransactions from "../components/LatestTransactions/LatestTransactions";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import Pagination from "../components/Pagination";
import { MdOutlineErrorOutline } from "react-icons/md";

const MainNet = () => {

  const { overview } = useContext(GlobalStateContext);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={"10rem 0 4rem 0"} bg={colorMode === "light" ? "#fff" : "#000"}>
      <Container
        maxW="6xl"
        color="white"
        display={"flex"}
        justifyContent={"space-between"}
        mb={10}
      >
        <Heading fontSize={"md"} fontWeight={400} color={colorMode === "light" ? "#000" : "#fff"}>
           Main Net - Overview
        </Heading>
        <Text to="" style={{ fontSize: "14px" }} color={colorMode === "light" ? "#000" : "#fff"} display={"flex"} gap={"3"}>
          View total number of records
          <Select width={"70px"} rounded="md" size="xs">
            <option value='option1'>10</option>
            <option value='option2'>20</option>
            <option value='option3'>30</option>
          </Select>
        </Text>
      </Container>
      <Box>
        <Container maxW="6xl">
          <Grid
            templateColumns="10% 90%"
            gap={0}
            bg={colorMode === "light" ? "#230A79" : "#232127"}
            // bg={"#232127"}
            borderTopRightRadius={4}
            borderTopLeftRadius={4}
          >
            <GridItem p={2}>
              <Text color={"#fff"}>Sr. no</Text>
            </GridItem>
            <GridItem p={2}>
              <Text color={"#fff"}>Transactions</Text>
            </GridItem>
          </Grid>
          <Box boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}>
            {overview.map((transaction, index) => (
              <Grid
                bg={
                  index % 2 === 0
                    ? colorMode === "light"
                      ? "#F2EFFF"
                      : "#312F35"
                    : colorMode === "light"
                    ? "#fff"
                    : "#232127"
                }
                key={transaction.id}
                templateColumns="10% 90%"
                gap={0}
              >
                <GridItem p={4} color={colorMode === "light" ? "#000" : "#fff"}>
                  {index + 1}.
                </GridItem>
                <GridItem p={4}>
                  <Box>
                    <Text
                      fontSize={"sm"}
                      mb={2}
                      color={colorMode === "light" ? "#230A79" : "#B09AFF"}
                    >
                      {transaction.description}
                    </Text>
                    <HStack fontSize={"sm"} gap={4} mb={2}>
                      <Text color={colorMode === "light" ? "#0F0F0F" : "#E8E8E8"}>
                        Sender :
                      </Text>
                      <Text color={colorMode === "light" ? "#230A79" : "#B09AFF"} textDecoration={"underline"}>
                        {transaction.sender}
                      </Text>
                    </HStack>
                    <HStack fontSize={"sm"} gap={4} mb={3}>
                      <Text color={colorMode === "light" ? "#0F0F0F" : "#E8E8E8"}>
                        Receiver :
                      </Text>
                      <Text color={colorMode === "light" ? "#230A79" : "#B09AFF"} textDecoration={"underline"}>
                        {transaction.receiver}
                      </Text>
                    </HStack>
                    <HStack
                      display={"flex"}
                      justifyContent={"space-between"}
                      w={"80%"}
                      fontSize={"sm"}
                      mb={3}
                    >
                      <Box>
                        <Text
                          mb={2}
                          color={colorMode === "light" ? "#7B7B7B" : "#E8E8E8"}
                        >
                          Smart contract ID dd :
                        </Text>
                        <Text
                          color={colorMode === "light" ? "#230A79" : "#B09AFF"}
                        >
                          {transaction.contract}
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          mb={2}
                          color={colorMode === "light" ? "#7B7B7B" : "#E8E8E8"}
                        >
                          Date and Time Stamp :
                        </Text>
                        <Text
                          color={colorMode === "light" ? "#230A79" : "#B09AFF"}
                        >
                          {transaction.date}
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          mb={2}
                          color={colorMode === "light" ? "#7B7B7B" : "#E8E8E8"}
                        >
                          Amount:
                        </Text>
                        <Text
                          color={colorMode === "light" ? "#230A79" : "#B09AFF"}
                        >
                          {transaction.amount}
                        </Text>
                      </Box>
                    </HStack>
                    <HStack fontSize={"sm"} alignItems={"flex-start"}>
                      <MdOutlineErrorOutline
                        fontSize={"20px"}
                        style={{ paddingTop: "4px" }}
                      />
                      <Box>
                        <HStack>
                          <Text
                            color={colorMode === "light" ? "#7B7B7B" : "#E8E8E8"}
                          >
                            Transaction type :
                          </Text>
                          <Text
                            color={colorMode === "light" ? "#230A79" : "#B09AFF"}
                          >
                            {transaction.transactionType}
                          </Text>
                        </HStack>
                        <HStack>
                          <Text
                            color={colorMode === "light" ? "#7B7B7B" : "#E8E8E8"}
                          >
                            Subnet ID/Main net :
                          </Text>
                          <Text
                            color={colorMode === "light" ? "#230A79" : "#B09AFF"}
                          >
                            {transaction.subnetID}
                          </Text>
                        </HStack>
                      </Box>
                    </HStack>
                  </Box>
                </GridItem>
              </Grid>
            ))}
          </Box>
          <Pagination />
        </Container>
      </Box>
    </Box>
  );
};

export default MainNet;
