// theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    gray: {
      50: "#e0e0e0", // Light gray (almost white, lightest)
      100: "#b3b3b3", // Light gray
      200: "#808080", // Medium gray
      300: "#4d4d4d", // Darker gray
      400: "#262626", // Even darker gray
      500: "#000000", // Black (your target color)
      600: "#000000", // Black
      700: "#000000", // Black
      800: "#000000", // Black
      900: "#000000", // Black (darkest)
    },
    deepPurple: {
      50: "#F1EAF4",
      100: "#DBC7E4",
      200: "#BFA0D0",
      300: "#9D78B8",
      400: "#794DA0",
      500: "#210A33",
      600: "#1C082D",
      700: "#160524",
      800: "#10041C",
      900: "#0A0212",
    },
  },
  components: {
    // Switch: {
    //   baseStyle: {
    //     track: {
    //       _checked: {
    //         bg: 'forestGreen.500', // using your custom color here
    //       },
    //     },
    //   },
    // },
  },
});

export default customTheme;
