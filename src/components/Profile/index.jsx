import {
  Grid,
  Box,
  VStack,
  Button,
  StackDivider,
  Wrap,
  WrapItem,
  Center,
  Card,
  CardBody,
  Flex,
  Spacer,
  Text,
  SimpleGrid,
  Square,
  Heading,
  CardFooter,
  CardHeader,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

export const Profile = () => {
  return (
    <Grid
      templateAreas={`"header header"
                  "main main"
                  `}
      gridTemplateRows={"150px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="100vh"
      gap="6"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"main"}>
        <Text as="b" fontSize="30px">
          My Profile
        </Text>
        <Wrap spacing="30px" align="center">
          <WrapItem
            w="980px"
            h="400px"
            border="2px"
            borderColor="black"
          ></WrapItem>
          <WrapItem w="400px" h="500px" border="2px" borderColor="black">
            <Text fontSize="25px" as="b">
              Skills
            </Text>
            <div
              style={{ position: "absolute", bottom: "70px", right: "70px" }}
            >
              <Button style={{ backgroundColor: "black", color: "#FAFAFA" }}>
                Edit Skills
              </Button>
            </div>
          </WrapItem>
        </Wrap>
      </GridItem>
    </Grid>
  );
};
