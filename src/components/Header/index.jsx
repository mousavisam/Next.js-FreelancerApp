import {
  VStack,
  Stack,
  StackDivider,
  Flex,
  Button,
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
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
  Icon,
  QuestionIcon,
  SettingsIcon,
  StarIcon,
} from "@chakra-ui/icons";
//import Icon from "@mdi/react";
import { mdiLogout } from "@mdi/js";
import Link from "next/link";
import { clearStorage } from "@/utils/storage";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    clearStorage();
    router.replace("/");
  };

  return (
    <Stack>
      <Box
        style={{ display: "flex", alignItems: "center", padding: "3px 15px" }}
      >
        <Button colorScheme="blue" variant="link"fontSize="20px" w="120px" flex="10%" as={Link}
           href="/dashboard">
    Skill Tree
  </Button>
       
        <ButtonGroup
          size="md"
          isAttached
          variant="outline"
          style={{ flex: "40%" }}
        >
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              borderColor: "black",
            }}
          >
            Browser
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              borderColor: "black",
            }}
          >
            Manage
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              borderColor: "black",
            }}
          >
            Group
          </Button>
        </ButtonGroup>

        <Box 
        style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <IconButton
          position="relative" right="20px"
            style={{ background: "white", color: "grey" }}
            fontSize="30px"
            icon={<EmailIcon />}
          />
          <Button 
          position="relative" right="20px"
          colorScheme="blue"
          as={Link}
            href="/project">
              Post Project
              </Button>

          

          <IconButton
          position="relative" right="20px"
            style={{ background: "white", color: "grey" }}
            icon={<Icon as={Avatar} fontSize="30px" />}
          />

          <Menu style={{ overflow: "hidden" }}>
            <MenuButton
              width={100}
              position="relative" right="20px"
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
              <MenuItem gap="6px">
                <StarIcon />
                Invite Friends
              </MenuItem>
              <MenuItem gap="6px">
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
          >Dashboard
          </Button>
          <Button colorScheme="blue">
            Lists
          </Button>
          <Button
            //   as={Link}
            //   href="/project"
            colorScheme="blue"
            //   onClick={() => {}}
          >
            Task Lists
          </Button>
          <Button colorScheme="blue">
            My Project
          </Button>
          <Button colorScheme="blue">
            Feedback
          </Button>
          <Button colorScheme="blue">
            Inbox
          </Button>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};
