import {
  Stack,
  VStack,
  Box,
  Center,
  Text,
  Input,
  Link,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  useToast,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {  taskApi } from "@/services";
import { useState } from "react";
import { useForm } from "react-hook-form";

const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    deliver_time: yup.string().required(),
    description: yup.string().required(),
    service_category: yup.string().required(),
  })
  .required();

export const Project = () => {
  const toast = useToast();
  const [isAdded, setIsAdded] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (values) => {
    taskApi
      .post(values)
      .then((res) => {
        setIsAdded(true);
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
    <VStack spacing={4} align="stretch">
      <Box h="60px">
        <Box w="90px" h="50px">
          <Center h="60px">
            <Button
              position="relative"
              font-weight="bold"
              left="100px"
              colorScheme="blue"
              variant="link"
              fontSize="20px"
              w="120px"
              flex="10%"
              as={Link}
              href="/dashboard"
            >
              <p font-weight="bold">Skill Tree</p>
            </Button>
          </Center>
        </Box>
      </Box>
      <Box
        h="50px"
        as="b"
        fontSize={{ base: "lg", lg: "lg" }}
        style={{ backgroundColor: "#C6F6D5", color: "black" }}
      >
        <Text position="relative" left="100px">
          Tell us about your project
        </Text>
      </Box>
      <Center>
        {isAdded ? (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            maxW="lg"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Your project created successfully!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              <Link href="/profile" style={{ color: "#4299e1" }}>
                Click here to back
              </Link>
            </AlertDescription>
          </Alert>
        ) : (
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            as="form"
            minW="lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack spacing={4}>
              <FormControl isRequired id="title" isInvalid={errors.title}>
                <FormLabel>Title</FormLabel>
                <Input type="text" {...register("title")} />
              </FormControl>
              <FormControl
                isRequired
                id="deliver_time"
                isInvalid={errors.deliver_time}
              >
                <FormLabel>Deliver Time</FormLabel>
                <Input type="date" {...register("deliver_time")} />
              </FormControl>
              <FormControl
                isRequired
                id="description"
                isInvalid={errors.description}
              >
                <FormLabel>Description</FormLabel>
                <Textarea {...register("description")} />
              </FormControl>
              <FormControl
                id="service_category"
                isRequired
                isInvalid={errors.service_category}
              >
                <FormLabel>Service Category</FormLabel>
                <Input type="text" {...register("service_category")} />
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
                  Post Project
                </Button>
              </Stack>
            </Stack>
          </Box>
        )}
      </Center>
    </VStack>
  );
};
