import React, { useState } from "react";
import {
  Select,
  HStack,
  Text,
  Box,
  IconButton,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Pagination = ({
  pageSize,
  setPageSize,
  totalItems,
  isLoading,
  setCurrentPage,
  currentPage,
}) => {
  // const [] = useState(itemsPerPageOptions[0]);
  const { colorMode, toggleColorMode } = useColorMode();

  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); // Reset to first page whenever page size changes
  };

  const paginationPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginationNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const displayRange = {
    start: (currentPage - 1) * pageSize + 1,
    end: Math.min(currentPage * pageSize, totalItems),
  };

  return (
    <HStack mt={16}>
      {/* <Text className='web-text-small'>Tanami v0.1</Text> */}

      <HStack justifyContent={"space-between"} w={"100%"}>
        <Button
          mt={1}
          size={"sm"}
          rounded="md"
          leftIcon={<FaArrowLeftLong />} // Icon on the left
          onClick={paginationPrev}
          className="link pointer"
          isDisabled={currentPage === 1}
          aria-label="Previous Page"
          bg={colorMode === "light" ? "light.100" : "#757575"}
          border={colorMode === "light" ? "1px solid #a39797" : "#757575"}
        >
          Previous
        </Button>
        {/* <Text
          w={"100px"}
          display={"flex"}
          justifyContent={"center"}
          className="web-text-medium"
          as={"span"}
        >
          {isLoading ? "0" : displayRange?.start} - {" "}
          {isLoading ? "00" : displayRange?.end} of {" "}
          {isLoading ? "00" : totalItems}
        </Text> */
        }
        <Text><Text as={"span"} me={3}>1</Text> <Text as={"span"} me={3}>2</Text> <Text as={"span"} me={3}>3</Text> <Text as={"span"} me={3}>4</Text><Text as={"span"} >....</Text></Text>
        <Button
          mt={1}
          size={"sm"}
          rounded="md"
          rightIcon={<FaArrowRightLong />} // Icon on the left
          onClick={paginationNext}
          className="link pointer"
          isDisabled={currentPage === totalPages}
          aria-label="Previous Page"
          bg={colorMode === "light" ? "light.100" : "#757575"}
          border={colorMode === "light" ? "1px solid #a39797" : "#757575"}
        >
          Next
        </Button>
      </HStack>
    </HStack>
  );
};

export default Pagination;
