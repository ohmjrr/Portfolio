import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    padding: "0px",
    margin: "0px",
    boxSizing: "border-box",
  },
  textStyles: {
    h1: {
      fontFamily: "Noto Serif Display",
      fontStyle: "normal",
      fontSize: "88px",
      fontWeight: "500",
      lineHeight: "125%",
    },
    h2: {
      fontFamily: "Noto Serif Display",
      fontStyle: "normal",
      fontSize: "68px",
      fontWeight: "500",
      lineHeight: "125%",
    },
    h3: {
      fontFamily: "Noto Serif Display",
      fontStyle: "normal",
      fontSize: "44px",
      fontWeight: "500",
      lineHeight: "125%",
    },
    h4: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "28px",
      fontWeight: "600",
      lineHeight: "150%",
    },
    h5: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "150%",
    },
    b1: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "150%",
    },
    b2: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "150%",
    },
    b3: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "150%",
    },
  },
});
