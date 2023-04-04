import {
  Grid,
  GridItem,
  InputGroup,
  InputLeftElement,
  Wrap,
  Input,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
export const Inbox = () => {
  return (
    <Grid
      templateAreas={`"header main"
                  "nav main"
                  "nav main"`}
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
      <GridItem
        pl="2"
        area={"main"}
        border="1px"
        borderColor="Black"
      ></GridItem>
    </Grid>
  );
};
