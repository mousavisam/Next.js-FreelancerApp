import {
  Box,
  Center,
  Text,
  SimpleGrid,
  VStack,
  Grid,
  Container,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";
export const Settings = () => {
  return (
    <VStack spacing={5} align="stretch">
      <Box h="40px" bg="black">
        <Box
          h="50px"
          as="b"
          fontSize={{ base: "lg", lg: "lg" }}
          style={{ color: "white" }}
        >
          <Text position="relative" left="100px">
            Account settings
          </Text>
        </Box>
      </Box>
      <Center>
        <VStack spacing={5}>
          <Box h="30px" w="1000px">
            <Text as="b">Profile</Text>
          </Box>
          <Box h="40px" w="1000px">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </Grid>
          </Box>
          <Box h="40p" w="1000px">
            <Input placeholder="Email Id" />
          </Box>
          <Box h="40px" w="1000px">
            <Input placeholder="Address" />
          </Box>
          <Box h="40px" w="1000px">
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <Input placeholder="City" />
              <Input placeholder="Province" />
              <Input placeholder="Zip code" />
            </Grid>
          </Box>
          <Box h="40px" w="1000px">
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <Input placeholder="Country" />
            </Grid>
          </Box>
          <Box h="40px" w="1000px">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Input placeholder="Mobile Number" />
            </Grid>
          </Box>
          <Box h="40px" w="1000px">
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <Text as="b">Change Password</Text>
            </Grid>
          </Box>
          <Box h="40px" w="1000px">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Input placeholder="Current Password" />
            </Grid>
          </Box>
          <Box h="40px" w="1000px">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Input placeholder="New Password" />
            </Grid>
          </Box>
          <Box h="40px" w="1000px">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Input placeholder="Confirm Password" />
            </Grid>
          </Box>
          <Button>Save the Changes</Button>
        </VStack>
      </Center>
    </VStack>
  );
};
