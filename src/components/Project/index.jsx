import {
  Stack,
  VStack,
  Box,
  Center,
  Text,
  Input,
  Button,

  Select,
} from "@chakra-ui/react";

export const Project = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box h="60px">
        <Box w="90px" h="50px">
          <Center h="60px">
            <Text as="b" fontSize={{ base: "md", lg: "lg" }}>
              Skill Tree
            </Text>
          </Center>
        </Box>
      </Box>
      <Box h="50px"as="b" fontSize={{ base: "lg", lg: "lg" }} style={{ backgroundColor: "#63B3ED", color: "black" }}>
        
        Tell us about your project
      </Box>
      <Center>
        <Box h="600px" w="1000px">
          <Text as="b">Name of the project</Text>
          <Input placeholder="eg; Build a virtual game" size="md" />
          <br></br>
          <br></br>
          <Text fontSize="20px" color="black">
            Project Description
          </Text>
          <textarea
            placeholder="Enter description"
            rows="10"
            cols="100"
            style={{ resize: "none", borderColor: "black", }}
            
          ></textarea>
          <br></br><br></br>
          <Text as="b">Skills required</Text>
          <Input placeholder="eg; Python, Java" size="md" />
          <br></br><br></br>
          <Text fontSize="20px" color="black">
            How do you want to pay
          </Text>
          <textarea
            placeholder="Enter description"
            rows="10"
            cols="50"
            style={{ resize: "lg" }}
          ></textarea>
         
          <Text as="b">
            <br></br>
            <br></br>
            Estimated budget
            <br></br><br></br>
            Budget in per hours
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <br></br><br></br>
            Total budget
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Text>
          <br></br><br></br>
          <Button
          size="md"
            style={{
              backgroundColor: "#63B3ED",
              color: "black",
              borderColor: "black",
            }}
            variant="outline"
          >
            Post Project
          </Button>
          <br></br>
          <br></br>
        </Box>
      </Center>
    </VStack>
  );
};
