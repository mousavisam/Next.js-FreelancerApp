import {
  SimpleGrid,
  Box,
  Center,
  Flex,
  WrapItem,
  Spacer,
  InputGroup,
  InputLeftElement,
  Wrap,
  Input,
  Heading,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const MyProject = () => {
  return (
    <SimpleGrid columns={1} spacing={5}>
      <Wrap>
        <WrapItem>
          <Center w="1400px" h="80px">
            <Box height="80px" width="1000px">
              <Flex minWidth="max-content" alignItems="center" gap="2">
                <Box p="2">
                  <Heading size="md">My Project</Heading>
                </Box>
                <Spacer />
                <ButtonGroup gap="2">
                  <Button colorScheme="teal">Hiree</Button>
                  <Button colorScheme="teal">Free Lancer</Button>
                </ButtonGroup>
              </Flex>
            </Box>
          </Center>
        </WrapItem>
      </Wrap>
      <Wrap>
        <WrapItem>
          <Center w="1400px" h="380px">
            <Box height="380px" width="1000px">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search2Icon color="gray.300" />}
                />
                <Input placeholder="Search projects" />
              </InputGroup>
            </Box>
          </Center>
        </WrapItem>
      </Wrap>
    </SimpleGrid>
  );
};
