import { signOut, useSession } from "next-auth/react";
import {
  VStack,
  Stack,
  StackDivider,
  Flex,
  Button,
  Avatar,
  Box,
  Menu,
  Drawer,
  useDisclosure,
  Input,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  DrawerBody,
  MenuButton,
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
import { useState } from "react";
import {
  EmailIcon,
  Icon,
  ChatIcon,
  SearchIcon,
  QuestionIcon,
  SettingsIcon,
  StarIcon,
} from "@chakra-ui/icons";
//import Icon from "@mdi/react";

import Link from "next/link";
import { clearStorage } from "@/utils/storage";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import React from "react";

export const Header = () => {
  const router = useRouter();
  const { data: socialData } = useSession();

  const handleLogout = () => {
    if (socialData) {
      signOut().then(() => {
        clearStorage();
        router.push("/login");
      });
    } else {
      clearStorage();
      router.push("/login");
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");
  return (
    <Stack>
      <Box
        style={{ display: "flex", alignItems: "center", padding: "3px 15px" }}
      >
        <Button
          colorScheme="blue"
          variant="link"
          fontSize="20px"
          w="120px"
          flex="10%"
          as={Link}
          href="/dashboard"
        >
          Skill Tree
        </Button>

        <ButtonGroup
          size="md"
          isAttached
          variant="outline"
          style={{ flex: "40%" }}
        >
          <Button
            onClick={onOpen}
            style={{
              backgroundColor: "white",
              color: "black",
              borderColor: "black",
            }}
          >
            Browser
          </Button>
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                <DrawerBody>
                  <Input placeholder="Search" />
                </DrawerBody>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Popover>
            <PopoverTrigger>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                }}
              >
                Manage
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Recent Project</PopoverHeader>
              <PopoverHeader>Lists</PopoverHeader>
              <PopoverHeader>Tasklists</PopoverHeader>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                }}
              >
                Group
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Groups</PopoverHeader>
            </PopoverContent>
          </Popover>
        </ButtonGroup>

        <Box style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <IconButton
            position="relative"
            right="20px"
            variant="outline"
            as={Link}
            href="/inbox"
            colorScheme="blue"
            aria-label="Message"
            icon={<ChatIcon />}
          />
          <Button
            position="relative"
            right="20px"
            colorScheme="blue"
            as={Link}
            href="/project"
          >
            Post Project
          </Button>

          <IconButton
            position="relative"
            right="20px"
            style={{ background: "white", color: "grey" }}
            icon={<Icon as={Avatar} fontSize="30px" />}
          />

          <Menu style={{ overflow: "hidden" }}>
            <MenuButton
              width={100}
              position="relative"
              right="20px"
              as={Button}
              colorScheme="blue"
            >
              Username
            </MenuButton>
            <MenuList>
              <MenuItem gap="6px" as={Link} href="/profile">
                <CgProfile />
                View profile
              </MenuItem>
              <MenuItem gap="6px" as={Link} href="/faq">
                <QuestionIcon />
                {"FAQ's"}
              </MenuItem>
              <MenuItem gap="6px" as={Link} href="/inviteFriends">
                <StarIcon />
                Invite Friends
              </MenuItem>
              <MenuItem gap="6px" as={Link} href="/settings">
                <SettingsIcon />
                Settings
              </MenuItem>
              <MenuItem gap="6px" onClick={handleLogout}>
                <FiLogOut />
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Box
        style={{
          backgroundColor: "#C6F6D5",
          padding: "5px 10px",
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonGroup
          size="md"
          isAttached
          variant="outline"
          style={{ outlineColor: "black", width: "70%" }}
        >
          <Button
            as={Link}
            href="/dashboard"
            colorScheme="blue"
            onClick={() => {}}
          >
            Dashboard
          </Button>
          <Button colorScheme="blue">Lists</Button>
          <Button
            //   as={Link}
            //   href="/project"
            colorScheme="blue"
            //   onClick={() => {}}
          >
            Task Lists
          </Button>
          <Button colorScheme="blue" as={Link} href="/myproject">
            My Project
          </Button>
          <Button colorScheme="blue">Feedback</Button>
          <Button colorScheme="blue" as={Link} href="/inbox">
            Inbox
          </Button>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};
