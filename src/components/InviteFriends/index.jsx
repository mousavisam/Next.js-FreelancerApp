import {
  Box,
  Center,
  Text,
  VStack,
  Container,
  Button,
  Input,
} from "@chakra-ui/react";
export const InviteFriends = () => {
  return (
    <>
      <VStack spacing={5} align="stretch">
        <Box h="40px" bg="black">
          <Box
            h="50px"
            as="b"
            fontSize={{ base: "lg", lg: "lg" }}
            style={{ color: "white" }}
          >
            <Text position="relative" left="100px">
              Invite Friends
            </Text>
          </Box>
        </Box>

        <VStack>
          <Container maxW="850px" h="50px">
            Refer by Mail
          </Container>
          <Container maxW="850px" h="250px">
            <Input
              placeholder="Enter the MailId"
              size="lg"
              style={{ height: "100px" }}
            />
          </Container>
          <Container maxW="80px">
            <Button>Send Invite</Button>
          </Container>
        </VStack>
      </VStack>
    </>
  );
};
