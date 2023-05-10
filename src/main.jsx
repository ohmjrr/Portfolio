import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme } from "./theme/Theme";
import { ColorModeScript } from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
