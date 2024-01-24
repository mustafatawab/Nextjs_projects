"use client";
import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Icon,
} from "@chakra-ui/react";
import icon1 from "./icons/icon1";
import icon2 from "./icons/icon2";
import icon3 from "./icons/icon3";

export default function Features() {
  return (
    <Box m='auto' w='800px'>
      <Flex  mt={'30px'}>
        <HStack p='20'>
          <Icon as={icon1}></Icon>
          <Text>30 days money back Guarantee</Text>
        </HStack>

        <HStack p='20'>
          <Icon as={icon2}></Icon>
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>

        <HStack p='20'>
          <Icon as={icon3}></Icon>
          <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
