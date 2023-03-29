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
  Icon,
  QuestionIcon,
  SettingsIcon,
  StarIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import { clearStorage } from "@/utils/storage";
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
        <Text as="b" fontSize="20px" w="120px" flex="10%">
          Skill Tree
        </Text>
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

        <Box style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <IconButton
            style={{ background: "white", color: "grey" }}
            fontSize="30px"
            icon={<EmailIcon />}
          />

          <Button
            variant="md"
            as={Link}
            href="/project"
            style={{ backgroundColor: "black", color: "#FAFAFA" }}
          >
            Post Project
          </Button>

          <IconButton
            style={{ background: "white", color: "grey" }}
            icon={<Icon as={Avatar} fontSize="30px" />}
          />

          <Menu style={{ overflow: "hidden" }}>
            <MenuButton
              variant="md"
              as={Button}
              style={{ backgroundColor: "black", color: "#FAFAFA" }}
            >
              Username
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} href="/profile">
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
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Box
        style={{
          backgroundColor: "black",
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
          <Button style={{ backgroundColor: "black", color: "white" }}>
            Inbox
          </Button>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};
