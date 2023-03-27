import {
  VStack,
  Stack,
  StackDivider,
  Flex,
  Button,
  Avatar,
  Box,
  Text,
  AbsoluteCenter,
  Menu,
  MenuButton,
  Popover,
  PopoverTrigger,
  MenuItem,
  Wrap,
  GridItem,
  MenuList,
  IconButton,
  ButtonGroup,
  WrapItem,
  Center,
  Grid,
} from "@chakra-ui/react";
import {
  EmailIcon,
  QuestionIcon,
  SettingsIcon,
  StarIcon,
} from "@chakra-ui/icons";
import Link from "next/link";

export const Header = () => {
  return (
    <VStack spacing={3} align="stretch">
      <Box h="60px">
        <Wrap spacing="30px">
          <WrapItem>
            <Center w="120px" h="50px">
              <Text as="b" fontSize="20px">
                Skill Tree
              </Text>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="380px" h="50px">
              <ButtonGroup
                size="lg"
                isAttached
                variant="outline"
                style={{ outlineColor: "black" }}
              >
                <Button
                  borderRadius="15px"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  Browser
                </Button>
                <Button style={{ backgroundColor: "white", color: "black" }}>
                  Manage
                </Button>
                <Button
                  borderRadius="15px"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Group
                </Button>
              </ButtonGroup>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="340px" h="50px"></Center>
          </WrapItem>
          <WrapItem>
            <Center w="60px" h="50px">
              <IconButton
                style={{ background: "white", color: "grey" }}
                fontSize="30px"
                icon={<EmailIcon />}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="140px" h="50px">
              <Button
                as={Link}
                href="/project"
                style={{ backgroundColor: "black", color: "#FAFAFA" }}
              >
                Post Project
              </Button>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="40px" h="50px">
              <Flex>
                <Avatar />
              </Flex>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="50px">
              <Menu>
                <MenuButton
                  as={Button}
                  style={{ backgroundColor: "black", color: "#FAFAFA" }}
                >
                  Username
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href="/profile">
                    View profile
                  </MenuItem>
                  <MenuItem gap="6px">
                    <QuestionIcon />
                    FAQ's
                  </MenuItem>
                  <MenuItem gap="6px">
                    <StarIcon />
                    Invite Friends
                  </MenuItem>
                  <MenuItem gap="6px">
                    <SettingsIcon />
                    Settings
                  </MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
      <Box h="80px" style={{ backgroundColor: "black" }}>
        <Stack direction={["column", "row"]} spacing="24px" align="stretch">
          <Box w="150px" h="40px">
            1
          </Box>
          <Box w="1000px" h="70px">
            <Center w="580px" h="60px">
              <ButtonGroup
                size="lg"
                isAttached
                variant="outline"
                style={{ outlineColor: "black" }}
              >
                <Button
                  borderRadius="15px"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Dashboard
                </Button>
                <Button style={{ backgroundColor: "black", color: "white" }}>
                  Lists
                </Button>
                <Button
                  //   as={Link}
                  //   href="/project"
                  style={{ backgroundColor: "black", color: "white" }}
                  //   onClick={() => {}}
                >
                  Task Lists
                </Button>
                <Button style={{ backgroundColor: "black", color: "white" }}>
                  My Project
                </Button>
                <Button style={{ backgroundColor: "black", color: "white" }}>
                  Feedback
                </Button>
                <Button
                  borderRadius="15px"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Inbox
                </Button>
              </ButtonGroup>
            </Center>
          </Box>
        </Stack>
      </Box>
      {/* <Box h="250px">

      </Box> */}
    </VStack>
  );
};
