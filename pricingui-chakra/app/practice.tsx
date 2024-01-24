"use client";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";

export default function Practice() {
  return (
    <ChakraProvider>
      <Heading>Heading by chakra</Heading>
      <Heading as="h1" color="red">
        This is H1
      </Heading>
      <Heading as="h2" fontFamily={"sanse-serif"} fontWeight="light">
        {" "}
        This is h2 heading from chakra ui
      </Heading>
      <text>Thsi is a paragraph by chakra</text>
      <h1 style={{ color: "blue" }}>Hello </h1>

      <div>
        <div style={{ backgroundColor: "red", color: "white" }}>Div 1</div>
        <div style={{ backgroundColor: "black", color: "white" }}>Div 2</div>
        <div style={{ backgroundColor: "blue", color: "white" }}>Div 3</div>
      </div>
    </ChakraProvider>
  );
}
