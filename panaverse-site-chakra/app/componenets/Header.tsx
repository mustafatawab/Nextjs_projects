"use client";
import { Box } from "@chakra-ui/layout";
import {
  ChakraProvider,
  Container,
  SimpleGrid,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useColorMode,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import ChevronDownIcon from "@chakra-ui/icon";
import SunIcon from "@chakra-ui/icon";
import MoonIcon from "@chakra-ui/icon";
// import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/PanaverseLogo1.png";

// import PanaverseLogo from "../../public/PanaverseLogo.png";
import Courses from "./courses/page";

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const colorMode = useColorModeValue("gray.100", "gray.700");
  return (
    <Box boxShadow={"lg"}>
      <Container maxW={1800} maxH={200}>
        <SimpleGrid
          justifyContent={"space-between"}
          templateColumns={"repeat(3, 1fr)"}
        >
          {/* We have to build 3 boxes. 1 Logo. 2. Pages link (Navbar). 3.APply button */}
          <Box mt={-5} w={200} h={100}>
            <Image src={Logo} alt="panaverse Logo"></Image>
          </Box>

          <Box mt={7}>
            <Flex
              placeItems={"center"}
              gap={10}
              color="gray.500"
              fontFamily={""}
              fontSize={"18"}
              fontWeight={"semibold"}
              display={{ base: "none", lg: "flex" }}
            >
              <Link href={"/"}>Home</Link>
              <Link href={"/componenets/team"}>Team</Link>
              <Link href={"/componenets/about"}>About Us</Link>
              <Link
                href={
                  "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
                }
              >
                More
              </Link>
            </Flex>
          </Box>
          <Flex>
            <Box mt="15px" px={20}>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Courses
                </MenuButton>
                  <MenuList>
                   <Link href="/componenets/courses"> <MenuItem>Web 3 and Metverse</MenuItem></Link>
                  </MenuList>
              </Menu>
            </Box>
            <Box m={0} mt={4}>
              <Button onClick={toggleColorMode}>
                <MoonIcon />
              </Button>
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
