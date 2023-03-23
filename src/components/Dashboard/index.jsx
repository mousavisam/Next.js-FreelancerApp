import {
  Grid,
  GridItem,
  Box,
  Center,
  Wrap,
  WrapItem,
  Heading,
  Text,
  useBreakpointValue,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Flex,
} from "@chakra-ui/react";

import {
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import Link from "next/link";

export const Dashboard = () => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"75px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="100vh"
      gap="0.5"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="white.300" area={"header"}>
        <Wrap spacing="5px">
          <WrapItem>
            <Center w="180px" h="70px">
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({
                    base: "20%",
                    md: "30%",
                  }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
                fontSize="30px"
              >
                Skill Tree
              </Text>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="130px" h="70px">
              <Button
                colorScheme="pink"
                variant="solid"
                leftIcon={<SearchIcon />}
              >
                Browser
              </Button>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="130px" h="70px">
              <Button colorScheme="pink" variant="solid">
                Manage
              </Button>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="130px" h="70px">
              <Button colorScheme="pink" variant="solid">
                Group
              </Button>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="450px" h="70px" bg="white"></Center>
          </WrapItem>
          <WrapItem>
            <Center w="50px" h="70px">
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<BellIcon />}
              />
              .
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="50px" h="70px">
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<ChatIcon />}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="70px">
              <Button colorScheme="pink" variant="solid">
                Post a project
              </Button>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="70px">
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  colorScheme="pink"
                  variant="solid"
                >
                  Thamizh
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href="/profile">
                    View Profile
                  </MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem as={Link} href="/login">
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            </Center>
          </WrapItem>
        </Wrap>
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};
