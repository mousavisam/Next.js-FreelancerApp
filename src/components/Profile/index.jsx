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
  Heading,
  CardFooter,
  CardHeader,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

export const Profile = () => {
  return (
    <HStack spacing="24px">
      <Box w="370px" h="700" bg="white" />
      <Box w="870px" h="700" bg="white.500">
        <SimpleGrid columns={1} spacingY="20px">
          <Box height="40px"> </Box>
          <Box height="40px">
            <Flex>
              <Button colorScheme="teal">Update Profile</Button>

              <Spacer />

              <Button colorScheme="teal">View Client</Button>
            </Flex>
          </Box>
          <Box bg="tomato" height="450px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </Box>
      <Box w="340px" h="700">
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <Box h="100px" bg="white.200"></Box>
          <Box h="200px" bg="tomato" justify="centre">
            2
          </Box>
          <Box h="100px">
            <Button colorScheme="cyan">Edit Skill</Button>
          </Box>
          <Box h="100px" bg="pink.100">
            3
          </Box>
        </VStack>
      </Box>
    </HStack>
  );
};
