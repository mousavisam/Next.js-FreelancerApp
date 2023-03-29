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
  billingData,
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
} from "@chakra-ui/react";
export const Dashboard = () => {
  return <>
  <Stack spacing={8}>
  <Box></Box>
          <Box p={5} shadow="md" position="relative" left="400px" width="600px" borderWidth="1px" flex="1" borderRadius="sm">
            <Link fontSize="xl">User 1</Link>
            
            <Text mt={4}>Hello Freelancers! Hope you are doing well.
We just wanted to let you know that this month we added these skills into the site:
Adobe Workfront, Windchill PLM, Cloud Custodian, ChatGPT and Firewall
If you work with these skills and want to add them you can do it from your profile, if you have any issue do not hesitate to contact support.</Text>
            <Text mt={4}></Text>
          </Box>
          <Box></Box>
          <Box p={5} shadow="md" position="relative" left="400px" width="600px" borderWidth="1px" flex="1" borderRadius="sm">
            <Link fontSize="xl">User 2</Link>
            
            <Text mt={4}>Freelancer blocks executable files in attachments for a reason. Be careful of clicking on Google Drive links or zip files as they may contain a virus. 
            If you are suspicious of a file you can put the link into virustotal.com for scanning.</Text>
            <Text mt={4}></Text>
          </Box>
  
</Stack></>;
};
