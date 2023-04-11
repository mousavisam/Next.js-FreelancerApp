import {  SimpleGrid,
  Box,
  Center,
  Flex,
  WrapItem,
  Spacer,
  InputGroup,
  Badge,
  InputLeftElement,
  Text,
  Wrap,
  Input,
  
  NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
      NumberDecrementStepper,
   
  NumberInput,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Avatar,
  ButtonGroup,
  Button,} from "@chakra-ui/react"
  import { Search2Icon } from "@chakra-ui/icons";


export const Feedback = () => {
return(
  <SimpleGrid columns={1} spacing={5}>
  <Wrap>
    <WrapItem>
      <Center w="1400px" h="80px">
        <Box height="80px" width="1000px">
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2">
              <Heading size="lg">Feedback</Heading>
            </Box>
            <Spacer />
          </Flex>
        </Box>
      </Center>
    </WrapItem>
  </Wrap>
  <SimpleGrid columns={2} spacing={10}>
  <Wrap>
    <WrapItem>
      
      <Center w="1100px"> 
      <Box width="1000px">

        <Box  p={5} shadow="lg" position="relative" left="1px" width="650px"borderWidth="1px" flex="1" borderRadius="lg">
        <Flex position="Left">
  <Avatar src="" />
  <Box ml="3">
    <Text fontWeight="bold">
      Fred Michael
      <FormControl left="1px" width="500px" id="Rate">
  <FormLabel width="200px">Rate
  <NumberInput max={10} min={0}>
  
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper/>
      <NumberDecrementStepper />
      
    </NumberInputStepper>
    
  </NumberInput>
  <Button colorScheme="blue" size="xs">
    Submit</Button>
  </FormLabel>
</FormControl>
     
    </Text>
   
  </Box>
</Flex>         
<Flex>
  <Avatar src="" />
  <Box ml="3">
    <Text fontWeight="bold">
     Client2
      <FormControl left="1px" width="500px" id="Rate">
  <FormLabel width="200px">Rate
  <NumberInput max={10} min={0}>
  
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper/>
      <NumberDecrementStepper />
      
    </NumberInputStepper>
    
  </NumberInput>
  <Button colorScheme="blue" size="xs">
    Submit</Button>
  </FormLabel>
</FormControl>
     
    </Text>
   
  </Box>
</Flex> 
<Flex>
  <Avatar src="" />
  <Box ml="3">
    <Text fontWeight="bold">
      Client 1
      <FormControl left="1px" width="500px" id="Rate">
  <FormLabel width="200px">Rate
  <NumberInput max={10} min={0}>
  
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper/>
      <NumberDecrementStepper />
      
    </NumberInputStepper>
    
  </NumberInput>
  <Button colorScheme="blue" size="xs">
    Submit</Button>
  </FormLabel>
</FormControl>
     
    </Text>
   
  </Box>
</Flex> 
<Flex>
  <Avatar src="" />
  <Box ml="3">
    <Text fontWeight="bold">
 Freelancer 1
      <FormControl left="1px" width="500px" id="Rate">
  <FormLabel width="200px">Rate
  <NumberInput max={10} min={0}>
  
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper/>
      <NumberDecrementStepper />
      
    </NumberInputStepper>
    
  </NumberInput>
  <Button colorScheme="blue" size="xs">
    Submit</Button>
  </FormLabel>
</FormControl>
     
    </Text>
   
  </Box>
</Flex> 
        </Box>
        </Box>
      </Center>
    </WrapItem>
  </Wrap>
  <Wrap>
    <WrapItem>
      
      <Center w="1200px" h="380px">
        <Box height="380px" width="1000px">
        <Box  p={5} shadow="lg" position="relative" left="1px" width="400px" borderWidth="1px" flex="1" borderRadius="lg">
        <Flex>
  <Avatar src="" />
  <Box ml="3">
    <Text sfontSize = "2em" fontWeight="bold">Username </Text>
      <Text fontSize="sm">Satisfactory Score</Text>
      <Badge ml="1" fontSize="2em"colorScheme="green">
        8.5/10
      </Badge>
   
    
  </Box>
</Flex>   
            </Box>
                
        </Box>
      </Center>
    </WrapItem>
  </Wrap>
  </SimpleGrid>
</SimpleGrid>
  
      
      
)
}
