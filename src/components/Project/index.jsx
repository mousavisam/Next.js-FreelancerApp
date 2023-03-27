import {
  Stack,
  VStack,
  Box,
  Center,
  Text,
  Input,
  Select,
} from "@chakra-ui/react";

export const Project = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box h="60px">
        <Box w="90px" h="50px">
          <Center h="60px">
            <Text as="b" fontSize="20px">
              Skill Tree
            </Text>
          </Center>
        </Box>
      </Box>
      <Box h="60px" style={{ backgroundColor: "black", color: "white" }}>
        tell us about your project
      </Box>
      <Center>
        <Box h="600px" w="1000px">
          <Text as="b">Name of the project</Text>
          <Input placeholder="eg; Build a virtual game" size="md" />
          <Text fontSize="20px" color="black">
            Project Description
          </Text>
          <textarea
            placeholder="Enter descriptyion"
            rows="10"
            cols="100"
            style={{ resize: "none" }}
          ></textarea>
          <br />
          <Text as="b">Skills required</Text>
          <Input placeholder="eg; Python, Java" size="md" />
          <Text fontSize="20px" color="black">
            How do you want to pay
          </Text>
          <textarea
            placeholder="Enter descriptyion"
            rows="10"
            cols="50"
            style={{ resize: "none" }}
          ></textarea>
          <textarea
            placeholder="Enter descriptyion"
            rows="10"
            cols="50"
            style={{ resize: "none" }}
          ></textarea>
          <Text as="b">
            Estimated budget
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Text>
        </Box>
      </Center>
    </VStack>
  );
};
