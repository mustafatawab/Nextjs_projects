import {
    Box,
    Container,
    Grid,
    Heading,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import logo from "../../public/PanaverseLogo.png";
  import Image from "next/image";
  import Link from "next/link";
  export default function Footer() {
    return (
      <Box bg={"#2d3748"}>
        <Container maxW={1600}>
          <SimpleGrid  ml={-40} spacingX={25} py={"60px"} templateColumns={"repeat(2, 1fr)"}>
            <Box px={40}>
              <Image width={250} height={100} src={logo} alt="Panaverse"></Image>
              <Text color={"white"}>
              Reshape Pakistan by cutting-edge technologies.
              </Text>
            </Box>
            
            <Box mr={'5px'}> 
              <SimpleGrid  templateColumns={'repeat(2, 1fr)'}
              >
                <Box mt={'20px'} color={'White'}>
                  <Text fontWeight={'bold'}>Panaverse DAO</Text>
                  <Grid >
                    <Link href={""}>About Us</Link>
                    <Link href={""}>Panaverse Community</Link>
  
                  </Grid>
                </Box>
                <Box color={'white'}>
                  <Heading><Link href={''}>Faculty</Link></Heading>
                  <Grid>
                    <Link href={''}>Course Details</Link>
                    <Link href={''}>Locations</Link>
                  </Grid>
                </Box>
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  