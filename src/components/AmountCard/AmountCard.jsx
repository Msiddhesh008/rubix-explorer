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
import { PiWalletFill } from "react-icons/pi";

const AmountCard = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack>
      <Container maxW="6xl">
        <Grid
          templateColumns="repeat(4, 2fr)"
          gap={4}
          bg={colorMode === "light" ? "light.100" : "black.900"}
          justifyContent="center"
          alignItems="center"
        >
          <GridItem
            bg={
              colorMode === "light"
                ? "#230A7926"
                : "linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)"
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
                RBT Price
              </Text>
              <Text
                fontSize={"sm"}
                color={colorMode === "light" ? "#230A79" : "#fff"}
              >
                $53,000
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
              <PiWalletFill color="white" fontSize={"20px"} />
            </Box>
          </GridItem>
          <GridItem
            bg={
              colorMode === "light"
                ? "#230A7926"
                : "linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)"
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
                RBT Price
              </Text>
              <Text
                fontSize={"sm"}
                color={colorMode === "light" ? "#230A79" : "#fff"}
              >
                $53,000
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
              <PiWalletFill color="white" fontSize={"20px"} />
            </Box>
          </GridItem>
          <GridItem
            bg={
              colorMode === "light"
                ? "#230A7926"
                : "linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)"
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
                RBT Price
              </Text>
              <Text
                fontSize={"sm"}
                color={colorMode === "light" ? "#230A79" : "#fff"}
              >
                $53,000
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
              <PiWalletFill color="white" fontSize={"20px"} />
            </Box>
          </GridItem>
          <GridItem
            bg={
              colorMode === "light"
                ? "#230A7926"
                : "linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)"
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
                RBT Price
              </Text>
              <Text
                fontSize={"sm"}
                color={colorMode === "light" ? "#230A79" : "#fff"}
              >
                $53,000
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
              <PiWalletFill color="white" fontSize={"20px"} />
            </Box>
          </GridItem>
          <GridItem
            bg={
              colorMode === "light"
                ? "#230A7926"
                : "linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)"
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
                RBT Price
              </Text>
              <Text
                fontSize={"sm"}
                color={colorMode === "light" ? "#230A79" : "#fff"}
              >
                $53,000
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
              <PiWalletFill color="white" fontSize={"20px"} />
            </Box>
          </GridItem>
          <GridItem
            bg={
              colorMode === "light"
                ? "#230A7926"
                : "linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)"
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
                RBT Price
              </Text>
              <Text
                fontSize={"sm"}
                color={colorMode === "light" ? "#230A79" : "#fff"}
              >
                $53,000
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
              <PiWalletFill color="white" fontSize={"20px"} />
            </Box>
          </GridItem>
          <GridItem
            bg={
              colorMode === "light"
                ? "#230A7926"
                : "linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)"
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
                RBT Price
              </Text>
              <Text
                fontSize={"sm"}
                color={colorMode === "light" ? "#230A79" : "#fff"}
              >
                $53,000
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
              <PiWalletFill color="white" fontSize={"20px"} />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </VStack>
  );
};

export default AmountCard;
