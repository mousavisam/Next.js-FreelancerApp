import { 
  Box,
  Stack,
  Button,
  Wrap,
  WrapItem,
  Center,
  Heading,
FormControl,
FormLabel,
Avatar,
 
  Spacer,
  Text,
  Input,
  Link,
  Flex,

 } from "@chakra-ui/react"
 import Select from "react-select";

export const Lists = () => {
return(
  
  <Stack spacing={8}>
      <Wrap>
    <WrapItem>
      <Center w="1400px" h="80px">
        <Box height="80px" width="1000px">
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2">
              <Heading size="lg">Contract</Heading>
            </Box>
            <Spacer />
          </Flex>
        </Box>
      </Center>
    </WrapItem>
  </Wrap>

    
  <Box></Box>
          <Box p={5} shadow="md" position="relative" left="400px" width="600px" borderWidth="1px" flex="1" borderRadius="sm">
            
            <Avatar src="" size="sm"/>
            
 
    <Link position ="relative"left = "10px" width = "100px" fontWeight="bold">
      User 1</Link>
      <br></br>
      <br></br>
      <Text fontSize="md" fontWeight={'bold'}> Project Tile1</Text>
      <Text mt={4}>In this project we need to create a website for the buisness person to sell their products in online and and customers buy those products using their credit cards or debiit cards</Text>
      <br></br> <br></br>
    <Text fontWeight={'bold'}>Proposal</Text>
      <Input type="string" />
      <br></br><br></br>
      <Text fontWeight={'bold'} >Deliviry time in days</Text>
      <Input type="day"  />
      <br></br><br></br>
      <Text fontWeight={'bold'}>Payment Amount</Text>
      <Input type="number"  />
      <br></br><br></br>
      
      
      <FormControl id="Payment Type">
  <FormLabel fontWeight={'bold'}>Payment Type</FormLabel>
  <Select placeholder="Select">
    <option>Hourly payment</option>
    <option>sigle Payment</option>
  </Select>
</FormControl>
<br></br><br></br>

      <Flex>
        <FormControl mr="5%">
          <FormLabel fontWeight={'bold'}>
            Start Date
          </FormLabel>
         
                <Input type="date"  />
          
        </FormControl>
        

        <FormControl>
          <FormLabel  fontWeight={'bold'}>
           End Date 
          </FormLabel>
          <Input type="date"  />
        </FormControl>
  
      </Flex>
      <br></br><br></br>
      <Flex>
        <FormControl mr="5%" >
          <FormLabel  fontWeight={'bold'}>
           Status
          </FormLabel>
          
  <Select placeholder="Select Status">
    <option>Pending</option>
    <option>Done</option>
  </Select>

        </FormControl>

        <FormControl>
          <FormLabel  fontWeight={'bold'}>
           Creation Time
          </FormLabel>
          <Input type="time"  />
        </FormControl>
       
      </Flex>
      <br></br><br></br>
      <Button colorScheme="blue" size="sm">
    Submit
  </Button>
      </Box>
      
      

  
 
  
  
</Stack>
)
}
