import {
  Box,
  Center,
  Text,
  VStack,
  Container,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { userApi } from "../../services";

export const InviteFriends = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");

  const handleSendInvite = () => {
    userApi
      .invite({ recipient_email: email })
      .then(() => {
        toast({
          title: "Sent!",
          description: "Invitation has been sent!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Error!",
          description: "Something went wrong, please try again!",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Container>
          <Container maxW="80px">
            <Button disabled={!email} onClick={handleSendInvite}>
              Send Invite
            </Button>
          </Container>
        </VStack>
      </VStack>
    </>
  );
};
