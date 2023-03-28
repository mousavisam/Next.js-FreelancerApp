import {
  Grid,
  Box,
  VStack,
  Stack,
  Button,
  StackDivider,
  ButtonGroup,
  Wrap,
  WrapItem,
  Center,
  Card,
  CardBody,
  Table,
  BillingRow,
  billingData ,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Spacer,
  Text,
  SimpleGrid,
  Square,
  Heading,
  CardFooter,
  CardHeader,
  GridItem,
  HStack,
  Link,
  Icon,
  Badge,
  Flex,
  Avatar,
} 
from "@chakra-ui/react";
import { useState } from "react";

export const Profile = () => {
  return (
    <Card p="1rem" my={{ sm: "24px", xl: "0px" }}>
    <CardHeader p="12px 5px" mb="12px">
      <Text fontSize="md" color="#63B3ED" fontWeight="bold">
        Profile Information
      </Text>
      <br></br>
      <Flex>
        <Avatar src="" />
        <Box ml="3">
          <Text fontWeight="bold">
            Fred Michael
            <Badge ml="1" colorScheme="green">
              Online
            </Badge>
          </Text>
          <Text fontSize="sm">UI Engineer</Text>
        </Box>
        </Flex>
    </CardHeader>
    <CardBody p="0px 5px">
      <Flex direction="column">
        <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
          Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer is
          no. If two equally difficult paths, choose the one more painful in the
          short term (pain avoidance is creating an illusion of equality).
        </Text>
        <Flex alignItems="center" mb="18px">
          <Text fontSize="md" color="#63B3ED" fontWeight="bold" me="10px">
            Full Name:{" "}
          </Text>
          <Text fontSize="md" color="gray.500" fontWeight="400">
            Esthera Jackson
          </Text>
        </Flex>
        <Flex alignItems="center" mb="18px">
          <Text fontSize="md" color="#63B3ED" fontWeight="bold" me="10px">
            Mobile:{" "}
          </Text>
          <Text fontSize="md" color="gray.500" fontWeight="400">
            (44) 123 1234 123
          </Text>
        </Flex>
        <Flex alignItems="center" mb="18px">
          <Text fontSize="md" color="#63B3ED" fontWeight="bold" me="10px">
            Email:{" "}
          </Text>
          <Text fontSize="md" color="gray.500" fontWeight="400">
            esthera@simmmple.com
          </Text>
        </Flex>
        <Flex alignItems="center" mb="18px">
          <Text fontSize="md" color="#63B3ED"fontWeight="bold" me="10px">
            Location:{" "}
          </Text>
          <Text fontSize="md" color="gray.500" fontWeight="400">
            United States
          </Text>
        </Flex>
        <Box>
   
   </Box>
   <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="lg"
    
    >
      <Heading fontSize="xl">Skills</Heading>
      <Text mt={4}>Python</Text>
      <Text mt={4}>java</Text>
    </Box>
    <br></br>
     <ButtonGroup variant="outline" spacing="6">
       <Button colorScheme="blue">Add Skills</Button>
     </ButtonGroup>
<br></br>
     <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      bjhb
    >
      <Heading fontSize="xl">Certifications</Heading>
      <Text mt={4}>Google cloud certification</Text>
      <Text mt={4}>AWS Certification</Text>
    </Box>
    <br>
    </br>
    <ButtonGroup variant="outline" spacing="6">
  <Button colorScheme="blue">Add Certificate</Button>
  </ButtonGroup>

 
        
      </Flex>
    </CardBody>
  </Card>
  
  
  );
};
