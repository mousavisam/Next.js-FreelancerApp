import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputRightElement,
  InputGroup,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userApi } from "@/services";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";

import { setUser } from "../../store/reducers/userSlice";
import {
  setStorageRefreshToken,
  setStorageToken,
  setStorageType,
  setStorageUsername,
} from "@/utils/storage";
import { useRouter } from "next/router";
import { ThirdPartyLogin } from "..";
import { TypeSelector } from "../Register/components/TypeSelector";

const schema = yup
  .object()
  .shape({
    username: yup
      .string()
      .min(4)
      .matches(/^[a-zA-Z0-9_]{3,}[a-zA-Z]+[0-9]*$/, "username is not valid"),
    password: yup.string().min(6).required(),
  })
  .required();

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSocialData, setHasSocialData] = useState(false);
  const [selectUserType, setSelectUserType] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (values) => {
    userApi
      .login(values)
      .then((res) => {
        console.info({ res });
        const { access_token, refresh_token, user_type } = res?.data;
        dispatch(
          setUser({
            username: values.username,
            access_token,
            refresh_token,
            user_type,
          })
        );
        setStorageType(user_type);
        setStorageUsername(values.username);
        setStorageToken(access_token);
        setStorageRefreshToken(refresh_token);
        router.push("/profile");
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

  if (isLoading || hasSocialData) {
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Alert
          status="info"
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
            You are in process of login with Google
          </AlertTitle>
          <AlertDescription maxWidth="sm">Please wait...</AlertDescription>
        </Alert>
      </Flex>
    );
  }

  if (selectUserType) {
    return <TypeSelector />;
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool{" "}
            <Link style={{ color: "#4299e1" }} href="/login">
              features
            </Link>{" "}
            ✌️
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
            <FormControl id="username" isRequired isInvalid={errors.username}>
              <FormLabel>Username</FormLabel>
              <Input type="text" {...register("username")} />
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
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link style={{ color: "#4299e1" }} href="/login">
                  Forgot password?
                </Link>
              </Stack>
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
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Don&apos;t have an account yet?{" "}
                <Link href="/register" style={{ color: "#4299e1" }}>
                  Register
                </Link>
              </Text>
            </Stack>
            <Stack pt={6}>
              <ThirdPartyLogin
                onLoading={setIsLoading}
                onHasData={setHasSocialData}
                onSelectType={setSelectUserType}
              />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
