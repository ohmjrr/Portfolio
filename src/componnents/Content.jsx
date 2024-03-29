import React from "react";
import { Flex, Text, Image, Spacer, Box, Center, Link } from "@chakra-ui/react";

function Content() {
  return (
    <Flex h="800px" alignItems="center" flexDirection="column" id="about-me">
      <Flex
        mt={10}
        boxSize={400}
        overflow="hidden"
        borderRadius="50%"
        bgColor="#FD836D"
      >
        <Image
          src="/image/ohmza.png"
          boxSize={500}
          mt="-80px"
          objectFit="cover"
        ></Image>
      </Flex>
      <Flex flexDirection="column" textAlign="center" mt={10}>
        <Text textStyle="h3" color="#FD836D" fontWeight="bold">
          About me
        </Text>
        <Text mt={30} mb={2} textStyle="b1">
          Hello, my name is Jirawut Sureerat, but you can call me Ohm. I
          graduated from the Faculty of Economics at Kasetsart University.
        </Text>
        <Text mb={2} textStyle="b1">
          However, I recently discovered that I enjoy programming more than
          economics, so I decided to enroll in TechUp to pursue my passion.
        </Text>
        <Text mb={2} textStyle="b1">
          I enjoy playing games, reading books, watching movies, listening to
          music, and in my free time, I like to study programming knowledge.
        </Text>
        <Text mb={2} textStyle="b1">
          I'm interested in programming because as a programmer, one must
          constantly learn and adapt.
        </Text>
      </Flex>
    </Flex>
  );
}

export default Content;
