import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./Store/Store.js";
import GlobalStateProvider from "./Contexts/GlobalStateProvider.jsx";
import customTheme from "./Theme/Theme.js";



createRoot(document.getElementById("root")).render(
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
        <GlobalStateProvider>
          <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
          <App />
        </GlobalStateProvider>
      </Provider>
    </ChakraProvider>
);
