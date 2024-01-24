"use client";
import React from "react";
import {
  ChakraProvider,
  Heading,
  Flex,
  Text,
  Box,
  VStack,
  HStack,
  Container,
} from "@chakra-ui/react";
import Header from "../Header";
import Footer from "../Footer";

export default function About() {
  return (
    <>
      <Header></Header>
      <VStack justifyContent={"center"} maxW={"60%"} m={"50px auto"}>
        <Heading mb={10} color="rgb(43, 108, 176)">
          About US
        </Heading>
        <Box
          mb={10}
          borderRadius={30}
          border={"2px solid rgb(43, 108, 176)"}
          p={10}
          boxShadow="dark-lg"
        >
          <Text>
            The mission of Panaverse is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things
          </Text>
        </Box>
        <br />
        <br />
        <Box
          mt={20}
          borderRadius={30}
          border={"2px solid rgb(43, 108, 176)"}
          p={10}
          boxShadow="dark-lg"
        >
          <Text>
            The internet is without a doubt the most important technological
            development in human history. Web3, 3D Metaverse, AI, IoT, Cloud,
            and Edge technologies expand the internet as we know it by
            introducing novel features and advancements. Metaverse will make use
            of all aspects of modern technology, including 3D, VR, AR, AI,
            blockchain, cloud and edge computing, voice computing, ambient
            computing, and more. Citi is the latest Wall Street business to give
            a positive prognosis for Web 3.0 and the Metaverse, terms used to
            depict a future internet vision centered on decentralized
            technologies and virtual worlds. Citi stated in a March 2022
            research paper that the metaverse economy might have a total
            addressable market of up to $13 trillion and five billion people by
            2030.
          </Text>
        </Box>

        <br />
        <br />
        <Heading fontSize={"2xl"} mt={10} mb={10} color="rgb(43, 108, 176)">
          Program in a Nut Shell
        </Heading>

        <br />
        <br />
        <Box
          mt={20}
          borderRadius={30}
          border={"2px solid rgb(43, 108, 176)"}
          p={10}
          boxShadow="dark-lg"
        >
          <Text>
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program's beginning. It resembles a
            cross between a corporate venture and an educational project.
          </Text>
        </Box>
      </VStack>

      <br />
      <br />
      <Footer></Footer>
    </>
  );
}
