import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme } from "./theme/Theme"

import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
