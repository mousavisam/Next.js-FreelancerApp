import {
  SimpleGrid,
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
  Button,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useCallback, useEffect, useState } from "react";
import { userApi } from "@/services";
import { Rating } from "./Rating";

export const Feedback = () => {
  const [users, setUsers] = useState([]);

  const handleGetUsers = useCallback(() => {
    userApi
      .getAll()
      .then((res) => {
        console.info("users", res?.data);
        setUsers(res?.data || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);
  return (
    <Box width="100%">
      <Box>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading size="lg">Feedback</Heading>
          </Box>
          <Spacer />
        </Flex>
      </Box>
      <Flex width="100%" p="10px" gap="10px" justifyContent="space-between">
        {users.map((user) => (
          <Box
            p={5}
            key={user.username}
            shadow="lg"
            position="relative"
            left="1px"
            width="49%"
            borderWidth="1px"
            flex="1"
            borderRadius="lg"
          >
            <Flex position="Left">
              <Avatar name={`${user.first_name} ${user.last_name}`} src="" />
              <Box ml="3">
                <Text fontWeight="bold">{`${user.first_name} ${user.last_name}`}</Text>
                <Text>{`@${user.username}`}</Text>
                <Rating username={user.username} />
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
