import {
  Box,
  Stack,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  
  Link,
} from "@chakra-ui/react";


export const Dashboard = () => {
  return <>
  <br></br>

  <Heading>Dashboard</Heading>
  <br></br>
  

          
  
<Box p={5} shadow="md" position="relative" left="1100px" top="10px" width="370px" borderWidth="1px" flex="1" borderRadius="sm">
<StatGroup>
  <Stat>
    <StatLabel>Seen </StatLabel>
    <StatNumber>20</StatNumber>
    <StatHelpText>
      <StatArrow type="increase" />
      36%
    </StatHelpText>
  </Stat>
  <Stat position="relative" left="100px">
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type="decrease" />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>
<Table variant="simple">
  <TableCaption>Imperial to metric conversion factors</TableCaption>
  <Thead>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td isNumeric>25.4</Td>
    </Tr>
    <Tr>
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
      <Td isNumeric>30.48</Td>
    </Tr>
    <Tr>
      <Td>yards</Td>
      <Td>metres (m)</Td>
      <Td isNumeric>0.91444</Td>
    </Tr>
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
    </Tr>
  </Tfoot>
</Table>
            
          </Box>

<Stack spacing={8}>
    
  <Box></Box>
          <Box p={5} shadow="md" position="relative" left="400px" top="-510px" width="600px" borderWidth="1px" flex="1" borderRadius="sm">
            <Link fontSize="xl">User 1</Link>
            
            <Text mt={4}>Hello Freelancers! Hope you are doing well.
We just wanted to let you know that this month we added these skills into the site:
Adobe Workfront, Windchill PLM, Cloud Custodian, ChatGPT and Firewall
If you work with these skills and want to add them you can do it from your profile, if you have any issue do not hesitate to contact support.</Text>
            <Text mt={4}></Text>
          </Box>
          <Box></Box>
          <Box p={5} shadow="md" position="relative" left="400px" top = "-510px" width="600px" borderWidth="1px" flex="1" borderRadius="sm">
            <Link fontSize="xl">User 2</Link>
            
            <Text mt={4}>Freelancer blocks executable files in attachments for a reason. Be careful of clicking on Google Drive links or zip files as they may contain a virus. 
            If you are suspicious of a file you can put the link into virustotal.com for scanning.</Text>
            <Text mt={4}></Text>
          </Box>
          
          
  
</Stack>
</>;
};
