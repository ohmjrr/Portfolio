import React from "react";
import {
  Flex,
  Text,
  Image,
  Spacer,
  Box,
  Center,
  Link,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      h="100px"
      justifyContent="space-between"
      alignItems="center"
      shadow="2xl"
      borderRadius="20px"
    >
      <Text textStyle="h4" fontWeight="bold" ml={20}>
        My Profile
      </Text>
      <Center w="550px">
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            width: "500px",
            justifyContent: "space-between",
          }}
        >
          <ScrollLink to="about-me" smooth={true} duration={1000}>
            <Text fontWeight="bold" cursor="pointer">
              <li>About Me</li>
            </Text>
          </ScrollLink>
          <ScrollLink to="project" smooth={true} duration={1000}>
            <Text fontWeight="bold" cursor="pointer">
              <li>Portfolio</li>
            </Text>
          </ScrollLink>
          <li>
            <Text onClick={toggleColorMode} fontWeight="bold" cursor="pointer">
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Text>
          </li>
          <li>
            <Link
              href="/Jirawut_Sureerat_Resume.pdf"
              target="_blank"
              style={{ textDecoration: "none" }}
              color="white"
              p="16px 36px"
              bg="#FD836D"
              borderRadius="20px"
              fontWeight="bold"
            >
              Resume
            </Link>
          </li>
        </ul>
      </Center>
    </Flex>
  );
}

export default Nav;
