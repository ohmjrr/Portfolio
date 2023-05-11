import React from "react";
import {
  Flex,
  Text,
  Image,
  Button,
  Box,
  Icon,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import room from "../../data/image_room";
import { AiFillGithub, AiOutlineSelect } from "react-icons/ai";

function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <Flex
      h="600px"
      flexDirection="column"
      alignItems="center"
      id="project"
    >
      <Text textStyle="h3" color="#FD836D" fontWeight="bold">
        Portforio
      </Text>
      <Flex mt={55}>
        <Box
          w="300px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text textStyle="h5" color="#FD836D" mt={9}>
            Full-Stack Project
          </Text>
          <Text textStyle="b1">Booking Web Application</Text>
          <Text textAlign="center" mt={7} textStyle="b2" color="gray.500">
            This is the team's final project in TechUp Bootcamp it's about
            accommodation booking. mainly using a scrum system for
            implementation.
          </Text>
          <ul>
            <Box display="flex" flexDirection="row" gap={6} mt={4}>
              <li>
                <Text textStyle="b2"> React</Text>
              </li>
              <li>
                <Text textStyle="b2">Chakra-UI</Text>
              </li>
              <li>
                <Text textStyle="b2">Express.js</Text>
              </li>
            </Box>
          </ul>
          <ul>
            <Box display="flex" flexDirection="row" gap={6}>
              <li>
                <Text textStyle="b2"> Supabase</Text>
              </li>
              <li>
                <Text textStyle="b2">Git</Text>
              </li>
            </Box>
          </ul>
          <Box mt={5} display="flex" gap={5}>
            <a
              href="https://github.com/jotanatsit/neatly-project"
              target="_blank"
            >
              <AiFillGithub size={30} />
            </a>

            <AiOutlineSelect size={30} onClick={onOpen} cursor="pointer" />

            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogFooter>
                    <Box
                      display="flex"
                      w="100%"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Text ml={10} textStyle="h5">
                        Coming Soon...
                      </Text>
                      <Button
                        bg="#FD836D"
                        color="white"
                        onClick={onClose}
                        ml={3}
                      >
                        ok
                      </Button>
                    </Box>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </Box>
        </Box>
        <Image src="/image/project/Capture.JPG" w="650px"></Image>
      </Flex>
      <Text mt={20} textStyle="h4" color="#FD836D">
        Mini-project
      </Text>
      <Flex
        w="600px"
        h="400px"
        mt={30}
        alignItems="center"
        border="2px solid"
        borderColor="gray.400"
        shadow="2xl"
        borderRadius="20px"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={0}
          loop={true}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
            clickable: true,
          }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
        >
          {room.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Flex
                  h="400px"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={item.image}
                    w="310px"
                    h="300px"
                    borderRadius="10px"
                    shadow="2xl"
                  ></Image>
                  <Box display="flex" alignItems="center" flexDirection="row">
                    <Text mt={5} textStyle="b1">
                      {item.title}
                    </Text>
                    <Box
                      display="flex"
                      alignItems="center"
                      gap={2}
                      ml={5}
                      mt={5}
                    >
                      <a href={item.link} target="_blank">
                        <AiFillGithub size={15} />
                      </a>
                      <AiOutlineSelect
                        size={15}
                        onClick={onOpen}
                        cursor="pointer"
                      />
                    </Box>
                  </Box>
                </Flex>
              </SwiperSlide>
            );
          })}
          <Flex>
            <Icon
              w="50px"
              boxSize={16}
              ml={30}
              className="button-prev swiper-button-prev"
            >
              <AiOutlineArrowLeft />
            </Icon>

            <Icon
              w="50px"
              boxSize={16}
              mr={30}
              className="button-next swiper-button-next"
            >
              <AiOutlineArrowRight  onClick={onOpen}/>
            </Icon>
          </Flex>
        </Swiper>
      </Flex>
    </Flex>
  );
}

export default Footer;
