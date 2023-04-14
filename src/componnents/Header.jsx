import React from "react";
import { Flex, Text, Image, Spacer, Box, Center, Link } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, } from "react-icons/ai";

function Header() {
  return (
    <Flex w="100vw" h="400px" flexDirection="column" alignItems="center">
      <Flex
        flexDirection="column"
        textAlign="center"
        w="700px"
        h="300px"
        mt={20}
      >
        <Text fontSize="40px" color="#FD836D" fontWeight="bold">
          I'm Jirawut Sureerat.
        </Text>
        <Text fontSize="30px">a Frontend developer</Text>
        <Text fontSize="18px" mt={10}>
          Frontend developer based in Thailand, Bangkok.
          <br /> I am coding with a clean and beautiful problem solving in mind
        </Text>
        <Flex mt={10} justifyContent="center" gap={10}>
          <a href="https://github.com/ohmjrr" target="_blank"><AiFillGithub size="50px" /></a>
          <a href="" target="_blank"><AiFillLinkedin size="50px" /></a>
          <a href="https://www.instagram.com/ohmjrr/" target="_blank"><AiFillInstagram size="50px" /></a>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
