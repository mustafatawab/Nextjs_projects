"use client";
import React from "react";
import {
  ChakraProvider,
  Flex,
  Button,
  Heading,
  Input,
  Box,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { InputRightAddon } from "@chakra-ui/input";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      <Box
        background={
          "https://cdn.pixabay.com/photo/2020/02/17/18/12/office-4857268_960_720.jpg"
        }
      >
        <Flex
          w="20%"
          m={"auto"}
          direction={"column"}
          alignItems={"center"}
          justifyContent="center"
          h={"100vh"}
        >
          <Flex background={"gray"}></Flex>
          <Heading p={5}>Log In</Heading>
          <Input mb={3} placeholder="Enter Email Address" variant={"filled"} />
          <Input mb={5} placeholder="Enter Password" variant={"filled"} />

          <Button mb={3} color={"white"} background={"teal"}>
            Login
          </Button>
          <Button onClick={toggleColorMode}>Toggle Mode</Button>
        </Flex>
      </Box>
    </>
  );
}
