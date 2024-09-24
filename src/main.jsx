import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./Store/Store.js";
import GlobalStateProvider from "./Contexts/GlobalStateProvider.jsx";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const customTheme = extendTheme({ colors });

createRoot(document.getElementById("root")).render(
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
        <GlobalStateProvider>
          <App />
        </GlobalStateProvider>
      </Provider>
    </ChakraProvider>
);
