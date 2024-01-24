'use client'
import {
  ChakraBaseProvider,
  Image,
  Button,
  Text,
  Heading,
  Grid,
  SimpleGrid,
  Flex,
  Box,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Link,
} from "@chakra-ui/react";

import React from "react";

export default function Courses() {
  return (
    <>
      <Box mt={10}>
        <SimpleGrid w={"50%"} m="auto">
          <Flex
            m={"auto"}
            as={"span"}
            alignItems={"center"}
            justifyContent="center"
            direction={"column"}
          >
            <Heading color="rgb(43, 108, 176)">Program of Studies</Heading>
            <Text>
              The first three quarters are shared by all specialties and are
              dedicated to studying Object-Oriented Programming and cutting-edge
              Full-Stack Web 2.0 development The graduates of this program will
              own products (Full-Stack App Templates, AR and VR Experiences, and
              APIs) that are marketed globally by the Panaverse DAO and, if they
              like, will also be able to start off by offering services at a
              rate of $50 per hour ($96,000 per year).
            </Text>
          </Flex>
        </SimpleGrid>

        <Grid
          m={"auto"}
          as="div"
          flexDir="column"
          mt={10}
          templateColumns="repeat(4, 1fr)"
          width={"80%"}
        >
          {/* QTR 1 */}
          <Card boxShadow={"dark-lg"} maxW="85%">
            <CardBody>
              <Image
                src="qtr1.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Quarter I</Heading>
                <Text>
                  CS-101: Object-Oriented Programming using TypeScript
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Link href="https://panaverse-site-usmanashrf.vercel.app/quarter1">
                  <Button variant="ghost" colorScheme="blue">
                    See More...
                  </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>

          {/* QTR 2 */}

          <Card boxShadow={"dark-lg"} maxW="85%">
            <CardBody>
              <Image src="qtr2.png" alt="Quarter 2" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Quarter II</Heading>
                <Text>
                  Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps
                  and APIs
                </Text>
                <Text>using Next.js 13</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link href="https://panaverse-site-usmanashrf.vercel.app/quarter2">
                <Button variant="ghost" colorScheme="blue">
                  See More...
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* QTR 3 */}
          <Card boxShadow={"dark-lg"} maxW="85%">
            <CardBody>
              <Image src="qtr3.png" alt="Quarter 3" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Quarter III</Heading>
                <Text>
                  Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps
                  and APIs
                </Text>
                <Text>using Next.js 13</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link href="https://panaverse-site-usmanashrf.vercel.app/quarter3">
                <Button variant="ghost" colorScheme="blue">
                  See More...
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/*QTR 4  */}

          <Card boxShadow={"dark-lg"} maxW="85%">
            <CardBody>
              <Image src="qtr4.png" alt="Quarter 4" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Quarter IV, V (Specialized)</Heading>
                <Text>Web 3.0 & Metaverse Specialization</Text>
                <Text>AI, Cloud-Native, IoT</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link href="https://panaverse-site-usmanashrf.vercel.app/specialization">
                <Button variant="ghost" colorScheme="blue">
                  See More...
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </Grid>
      </Box>
    </>
  );
}
