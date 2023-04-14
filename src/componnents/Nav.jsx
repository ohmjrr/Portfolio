import React from "react";
import { Flex, Text, Image, Spacer, Box, Center, Link } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

function Nav() {
  return (
    <Flex
      h="100px"
      w="100vw"
      justifyContent="space-between"
      alignItems="center"
      shadow="2xl"
      borderRadius="20px"
    >
      <Text fontSize="30px" fontWeight="bold" ml={20}>My Profile</Text>
      <Center w="550px">
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            width: "500px",
            justifyContent: "space-between",
          }}
        >
          <ScrollLink to="about-me" smooth={true} duration={1000}><Text fontWeight="bold" cursor="pointer"><li>About Me</li></Text></ScrollLink>
          <ScrollLink to="project" smooth={true} duration={1000}><Text fontWeight="bold" cursor="pointer"><li>Portfolio</li></Text></ScrollLink>
          <Text fontWeight="bold" cursor="pointer"><li>Dark mode</li></Text>
          <li>
            <Link
              href="Jirawut sureerat.pdf"
              download="Jirawut sureerat.pdf"
              style={{ textDecoration: "none" }}
              color="white"
              p="16px 36px"
              bg="#FD836D"
              borderRadius="20px"
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
