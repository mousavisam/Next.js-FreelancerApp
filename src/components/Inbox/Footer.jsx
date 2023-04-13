import React from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

export const Footer = ({
  disabled,
  inputMessage,
  setInputMessage,
  handleSendMessage,
}) => {
  const handleInput = (e) => {
    const value = e.target.value;
    console.info({ value });
    setInputMessage(value);
  };

  return (
    <Flex w="100%" mt="5">
      <Input
        placeholder="Type Something..."
        border="none"
        borderRadius="none"
        _focus={{
          border: "1px solid black",
        }}
        value={inputMessage}
        onChange={handleInput}
      />
      <Button
        bg="black"
        color="white"
        borderRadius="none"
        _hover={{
          bg: "white",
          color: "black",
          border: "1px solid black",
        }}
        disabled={inputMessage.trim().length <= 0 || disabled}
        onClick={() => handleSendMessage(inputMessage)}
      >
        Send
      </Button>
    </Flex>
  );
};
