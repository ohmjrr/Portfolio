import React from "react";
import { Flex, Text, Image, Spacer, Box, Icon } from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import room from "../../data/image_room";

function Footer() {
  return (
    <Flex
      w="100vw"
      h="600px"
      flexDirection="column"
      alignItems="center"
      id="project"
    >
      <Text textStyle="h3" color="#FD836D" fontWeight="bold">
        Portforio
      </Text>
      <Flex
        w="600px"
        h="400px"
        mt={55}
        alignItems="center"
        border="2px solid"
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
                <Flex h="360px" flexDirection="column" alignItems="center">
                  <Image
                    src={item.image}
                    w="310px"
                    h="300px"
                    borderRadius="10px"
                    shadow="2xl"
                  ></Image>
                  <Text mt={5} textAlign="center" textStyle="b1">
                    {item.title}
                  </Text>
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
              <AiOutlineArrowRight />
            </Icon>
          </Flex>
        </Swiper>
      </Flex>
    </Flex>
  );
}

export default Footer;
