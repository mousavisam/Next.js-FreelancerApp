import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Select,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userApi } from "@/services";
import { ThirdPartyLogin } from "..";

const schema = yup
  .object()
  .shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    username: yup
      .string()
      .min(4)
      .matches(/^[a-zA-Z0-9_]{3,}[a-zA-Z]+[0-9]*$/, "username is not valid"),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    type: yup.string().required(),
  })
  .required();

export const Register = () => {
  const toast = useToast();
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (values) => {
    userApi
      .register(values)
      .then((res) => {
        console.info({ res });
        setIsRegistered(true);
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
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      {isRegistered ? (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
          maxW={"lg"}
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            You have been registered successfully!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            <Link href="/login" style={{ color: "#4299e1" }}>
              Click here to Login
            </Link>
          </AlertDescription>
        </Alert>
      ) : (
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl
                    isRequired
                    id="first_name"
                    isInvalid={errors.first_name}
                  >
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" {...register("first_name")} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl
                    isRequired
                    id="last_name"
                    isInvalid={errors.last_name}
                  >
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" {...register("last_name")} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="username" isRequired isInvalid={errors.username}>
                <FormLabel>Username</FormLabel>
                <Input type="text" {...register("username")} />
              </FormControl>
              <FormControl id="email" isRequired isInvalid={errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")} />
              </FormControl>
              <FormControl id="password" isInvalid={errors.password} isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="type" isInvalid={errors.type} isRequired>
                <FormLabel>Select type</FormLabel>
                <Select placeholder="Select option" {...register("type")}>
                  <option value="FREELANCER">Freelancer</option>
                  <option value="CLIENT">Client</option>
                </Select>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link href="/login" style={{ color: "#4299e1" }}>
                    Login
                  </Link>
                </Text>
              </Stack>
              <Stack pt={6}>
                <ThirdPartyLogin />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      )}
    </Flex>
  );
};
