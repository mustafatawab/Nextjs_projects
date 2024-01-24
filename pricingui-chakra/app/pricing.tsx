"use client";
import React from "react";
import {
  Icon,
  Button,
  ChakraProvider,
  Flex,
  Box,
  Text,
  Heading,
  HStack,
} from "@chakra-ui/react";

import checkMarkIcon from "./icons/checkMarkIcon";
export default function Pricing() {
  return (
    <Box
      width={"950px"}
      m="auto"
      mt={"-150px"}
      // mx = '20px'
      bg="white"
      borderRadius={"16px"}
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
    >
      <Flex direction={{base: 'column' , md: 'column' , lg: 'row'}}>
        {/* Left container */}
        <Box bg={"#cb8eee"} p='30px' textAlign={"center"}>
          <Text m="0px" fontSize={"24px"} fontWeight="bold">
            Primium PRO
          </Text>

          <Heading fontSize={"60px"} m='0px'>
            $329
          </Heading>
          <Text mt="0px">Billed Just once</Text>
          <Button
            color="black"
            bg="#805AD5"
            mt={""}
            w="300px"
            h={"30px"}
            border="none"
          >
            Get Started
          </Button>
        </Box>

        {/* right box */}
        <Box pt="50px" pl="30px">
          <Text fontWeight={'bold'}>
            Access These Features When You Get This Pricing Package For Your
            Business
          </Text>

          <HStack>
            <Icon as={checkMarkIcon}></Icon>
            <Text mt={"0px"}> International calling and messaging API</Text>
          </HStack>

          <HStack>
            <Icon as={checkMarkIcon}></Icon>
            <Text mt={"0px"}>Additional phone numbers</Text>
          </HStack>

          <HStack>
            <Icon as={checkMarkIcon}></Icon>
            <Text mt={"0px"}>Automated messages via Zapier</Text>
          </HStack>

          <HStack>
            <Icon as={checkMarkIcon}></Icon>
            <Text mt={"0px"}>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
