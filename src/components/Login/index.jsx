import { Flex, Heading, Button, Input } from '@chakra-ui/react';

export const Login = ({ onSubmit, emailRef, passwordRef }) => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <form onSubmit={onSubmit}>
          <Heading mb={6}>Log in</Heading>
          <Input
            mb={3}
            ref={emailRef}
            placeholder="admin@gmail.com"
            variant="filled"
            type="email"
          />
          <Input
            mb={3}
            ref={passwordRef}
            placeholder="*******"
            variant="filled"
            type="password"
          />
          <Button colorScheme="teal" type="submit">
            Login
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};
