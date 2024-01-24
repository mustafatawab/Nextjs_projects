"use client"
import Header from "./header";
import Practice from "./practice";
import Pricing from "./pricing";
import Features from "./feature";
import {ChakraProvider , Text , Heading , Flex} from "@chakra-ui/react"

export default function PricingUI() {
  return (
    <>

       
      <Header></Header>
      <Pricing></Pricing>

      {/* <Practice></Practice> */}
      <Features></Features>
    </>
  );
}
