import {
  Grid,
  GridItem,
  Flex,
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  InputGroup,
  Spacer,
  ButtonGroup,
  Button,
  InputLeftElement,
  Wrap,
  Input,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { FiMenu } from "react-icons/fi";
export const Inbox = () => {
  return (
    <Grid
      templateAreas={`"header main"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"250px 1fr"}
      h="80vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"header"} border="1px" borderColor="Black">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input placeholder="Search projects" />
        </InputGroup>
      </GridItem>
      <GridItem pl="2" area={"nav"} border="1px" borderColor="Black">
        no message yet
      </GridItem>
      <GridItem pl="2" area={"main"} border="1px" borderColor="Black">
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          border="1px"
          borderColor="Black"
        >
          <Box p="2">
            <Heading size="md">User Name</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Menu>
              <MenuButton as={Button}>
                <FiMenu />
              </MenuButton>
              <MenuList>
                <MenuItem>View Profile</MenuItem>
                <MenuItem>Block</MenuItem>
              </MenuList>
            </Menu>
          </ButtonGroup>
        </Flex>
      </GridItem>
      <GridItem pl="2" area={"footer"} border="1px" borderColor="Black">
        text
      </GridItem>
    </Grid>
  );
};
