"use client";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Heading,
  HStack,
  VStack,
  Container,
  AvatarGroup,
  Avatar,
  Divider,
} from "@chakra-ui/react";
export default function Team() {
  return (
    <>
      <Header></Header>
      <Flex mt={100} ml={50} gap={10}>
        <Box
          maxW={"450px"}
          p={35}
          boxShadow={"dark-lg"}
          justifyContent={"left"}
          alignItems="left"
        >
          <HStack justifyContent={"center"}>
            <AvatarGroup size="md" max={1}>
              <Avatar
                name="Ryan Florence"
                src="https://panaverse-site-usmanashrf.vercel.app/ZiaKhan.png"
              />
            </AvatarGroup>
            <Heading fontSize={"2xl"}>Zia Khan</Heading>
          </HStack>

          <VStack p={5} justifyContent={"left"}>
            <Heading fontSize={"2xl"}>LEAD FACULTY MEMBER</Heading>
            <Text>Teaching Web 3 and metaverse Techonology</Text>
            <Divider></Divider>
            <Heading fontSize={"2xl"}>Clasess</Heading>
            <Text>Taking 4 onsite classes all over Pakistan in a week..</Text>
          </VStack>
        </Box>

        <Box
          maxW={"450px"}
          p={35}
          boxShadow={"dark-lg"}
          justifyContent={"left"}
          alignItems="left"
        >
          <HStack justifyContent={"center"}>
            <AvatarGroup size="md" max={1}>
              <Avatar
                name="Ryan Florence"
                src="https://panaverse-site-usmanashrf.vercel.app/HiraKhan.png"
              />
            </AvatarGroup>
            <Heading fontSize={"2xl"}>Zia Khan</Heading>
          </HStack>

          <VStack p={5} justifyContent={"left"}>
            <Heading fontSize={"2xl"}>LEAD FACULTY MEMBER</Heading>
            <Text>Teaching Web 3 and metaverse Techonology</Text>
            <Divider></Divider>
            <Heading fontSize={"2xl"}>Clasess</Heading>
            <Text>Taking 4 onsite classes all over Pakistan in a week..</Text>
          </VStack>
        </Box>

        <Box
          maxW={"450px"}
          p={35}
          boxShadow={"dark-lg"}
          justifyContent={"left"}
          alignItems="left"
        >
          <HStack justifyContent={"center"}>
            <AvatarGroup size="md" max={1}>
              <Avatar
                name="Adil Altaf"
                src="https://panaverse-site-usmanashrf.vercel.app/adil.jpg"
              />
            </AvatarGroup>
            <Heading fontSize={"2xl"}>Zia Khan</Heading>
          </HStack>

          <VStack p={5} justifyContent={"left"}>
            <Heading fontSize={"2xl"}>LEAD FACULTY MEMBER</Heading>
            <Text>Teaching Web 3 and metaverse Techonology</Text>
            <Divider></Divider>
            <Heading fontSize={"2xl"}>Clasess</Heading>
            <Text>Taking 4 onsite classes all over Pakistan in a week..</Text>
          </VStack>
        </Box>
      </Flex>
      <Box
        maxW={"450px"}
        p={35}
        boxShadow={"dark-lg"}
        justifyContent={"left"}
        alignItems="left"
        mt={50}
        ml={50}
        mb={50}
      >
        <HStack justifyContent={"center"}>
          <AvatarGroup size="md" max={1}>
            <Avatar
              name="Danial Nagori"
              src="https://panaverse-site-usmanashrf.vercel.app/Daniyal.png"
            />
          </AvatarGroup>
          <Heading fontSize={"2xl"}>Zia Khan</Heading>
        </HStack>

        <VStack p={5} justifyContent={"left"}>
          <Heading fontSize={"2xl"}>LEAD FACULTY MEMBER</Heading>
          <Text>Teaching Web 3 and metaverse Techonology</Text>
          <Divider></Divider>
          <Heading fontSize={"2xl"}>Clasess</Heading>
          <Text>Taking 4 onsite classes all over Pakistan in a week..</Text>
        </VStack>
      </Box>
      <Footer></Footer>
    </>
  );
}
