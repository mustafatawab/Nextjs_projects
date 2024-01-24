import {
    Box,
    Container,
    SimpleGrid,
    Grid,
    Text,
    Flex,
    Button,
    Heading,
    Image,
    Stack,
    Card,
    CardBody,
    ButtonGroup,
    CardFooter,
    Divider,
    useColorModeValue,
    space,
    Link,
  } from "@chakra-ui/react";
  import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
  import React from "react";
  import Header from "../Header";
  export default function MainPage() {
    const colrMode = useColorModeValue("gray.100", "gray.700");
    const colorMode1 = useColorModeValue("black", "white");
  
    return (
      <>
        {/* Banner (Section1) */}
        <Box bg={colrMode}>
          {/* "#e2e8f0" */}
          <SimpleGrid
            templateColumns={{
              base: "repeat(1, 1fr)",
  
              lg: "repeat(2, 1fr)",
            }}
          >
            <Box
              bg={"white"}
              w={{ base: "90%", md: "90%", lg: "70%" }}
              h={400}
              my={50}
              borderRadius={"0px 30px 30px 0px"}
              boxShadow={"2xl"}
            >
              <Grid justifyContent={"center"} mt={100} w="50%" ml={70} px={50}>
                <Heading color={colorMode1} mt={-10} pb={10}>
                  Web 3.0 Metaverse
                </Heading>
                <Text fontWeight={"bold"} color="red">
                  Earn as you Learn Program
                </Text>
                <Button mt={10} bg="rgb(43, 108, 176)" color={"white"} w="150px">
                  Apply Now
                </Button>
              </Grid>
            </Box>
            <Box>
              <Image src="desktopPic.png"></Image>
            </Box>
          </SimpleGrid>
        </Box>
  
        {/* Panaverse Community */}
  
        <Flex flexDir={{ base: "column", md: "column", lg: "row" }} mt={150}>
          <Box ml={250} mt={100}>
            <Image src="community.png"></Image>
          </Box>
  
          <Box w={800} boxShadow="dark-lg" ml={50} borderRadius={50}>
            <Flex flexDir={{ base: "column", md: "row", lg: "row" }}>
              <Heading p={50} color="rgb(43, 108, 176)" fontSize={"5xl"}>
                The Panaverse Community
              </Heading>
              <Box w={600} p={30}>
                <Text>
                  Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand
                  the internet as we know it by introducing novel features and
                  advancements.In this brand-new type of curriculum. In which
                  students will learn how to make money and boost exports in the
                  classroom and will begin doing so within six months of the
                  program's beginning. It resembles a cross between a corporate
                  venture and an educational project.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
  
        <Divider></Divider>
  
        {/* What is Metaverse */}
  
        <Flex flexDir={{ base: "column", lg: "row" }} ml={-10} mt={100}>
          <Image src="metaverse.png"></Image>
          <Flex direction={"column"}>
            <Heading color="rgb(43, 108, 176)">What is Metaverse</Heading>
            <Text fontSize={"larger"} alignContent={"center"}>
              A communal environment or virtual world made possible by the fusion
              of physical and virtual reality is referred to as the "metaverse."
              Users can engage in shared interactions with a wide range of virtual
              objects and environments in this imagined networked virtual world.
              Various technology businesses are aggressively pursuing the science
              fiction idea of a metaverse in an effort to give users a seamless
              and immersive experience. Metaverse is a highly-anticipated future
              version of the internet where users are able to fully immerse
              themselves in a shared, virtual world. It is expected to have a
              significant impact on a variety of industries and bring people
              together from all over the world, but also raises important
              questions about privacy and security.
            </Text>
          </Flex>
        </Flex>
  
        {/* Program For Studies */}
  
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
            templateColumns={{sm: "repeat(1, 1fr)", base: 'repeat(1, 1fr)',lg: "repeat(4, 1fr)"}}
            width={"80%"}
          >
            {/* QTR 1 */}
            <Card mt={10} boxShadow={"dark-lg"} maxW="85%">
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
  
            <Card mt={10} boxShadow={"dark-lg"} maxW="85%">
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
            <Card mt={10} boxShadow={"dark-lg"} maxW="85%">
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
  
            <Card mt={10} boxShadow={"dark-lg"} maxW="85%">
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
  
        {/* Operational Cities */}
  
        <Box py={20} bg={"gray.100"} mt={20}>
          <Box ml="40%">
            <Heading color="rgb(43, 108, 176)">Operational Cities</Heading>
          </Box>
          <Flex flexDir={{base: 'column' , lg: 'row'}} ml={"20px"} gap={30}>
            <Image src="https://panaverse-site-usmanashrf.vercel.app/pakistanMap.png"></Image>
            <Box mt={10}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                boxShadow={"dark-lg"}
                borderRadius={15}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://panaverse-site-usmanashrf.vercel.app/KHR.png"
                  alt="Karachi"
                />
  
                <Stack>
                  <CardBody>
                    <Heading size="md">Karachi</Heading>
  
                    <Text py="2">Location: Bharia Auditorium</Text>
                    <Text>Tue and Wed 6:00 pm to 10:00 pm</Text>
                  </CardBody>
  
                  <CardFooter></CardFooter>
                </Stack>
              </Card>
  
              {/*  */}
  
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                boxShadow={"dark-lg"}
                mt={5}
                borderRadius={15}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://panaverse-site-usmanashrf.vercel.app/peshawar.png"
                  alt="Peshawwar"
                />
  
                <Stack>
                  <CardBody>
                    <Heading size="md">Karachi</Heading>
  
                    <Text py="2">Location: Bharia Auditorium</Text>
                    <Text>Tue and Wed 6:00 pm to 10:00 pm</Text>
                  </CardBody>
  
                  <CardFooter></CardFooter>
                </Stack>
              </Card>
  
              {/*  */}
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                boxShadow={"dark-lg"}
                mt={5}
                borderRadius={15}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://panaverse-site-usmanashrf.vercel.app/ISB.png"
                  alt="Islamabad"
                />
  
                <Stack>
                  <CardBody>
                    <Heading size="md">Karachi</Heading>
  
                    <Text py="2">Location: Bharia Auditorium</Text>
                    <Text>Tue and Wed 6:00 pm to 10:00 pm</Text>
                  </CardBody>
  
                  <CardFooter></CardFooter>
                </Stack>
              </Card>
  
              {/*  */}
  
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                boxShadow={"dark-lg"}
                mt={5}
                borderRadius={15}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://panaverse-site-usmanashrf.vercel.app/LHR.png"
                  alt="Lahore"
                />
  
                <Stack>
                  <CardBody>
                    <Heading size="md">Karachi</Heading>
  
                    <Text py="2">Location: Bharia Auditorium</Text>
                    <Text>Tue and Wed 6:00 pm to 10:00 pm</Text>
                  </CardBody>
  
                  <CardFooter></CardFooter>
                </Stack>
              </Card>
            </Box>
          </Flex>
        </Box>
      </>
    );
  }
  