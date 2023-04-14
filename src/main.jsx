import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Theme } from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
