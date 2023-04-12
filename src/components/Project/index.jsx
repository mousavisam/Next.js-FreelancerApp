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
import Select from "react-select";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryApi, taskApi } from "@/services";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { isEmpty } from "lodash";

const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    deliver_time: yup.string().required(),
    description: yup.string().required(),
    service_category: yup.object().required(),
    tags: yup.array().of(yup.object()).required(),
  })
  .required();

export const Project = () => {
  const toast = useToast();
  const [categories, setCategories] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const handleGetCategories = useCallback(() => {
    categoryApi.getAll().then((res) => {
      console.info({ res });
      setCategories(res?.data || []);
    });
  }, []);

  const onSubmit = (values) => {
    const tags = values.tags.map((tag) => tag.value);
    taskApi
      .post({
        ...values,
        tags,
        service_category: values.service_category.value,
      })
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

  useEffect(() => {
    handleGetCategories();
  }, [handleGetCategories]);

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
                isInvalid={errors.service_category}
                isRequired
              >
                <FormLabel>Service Category</FormLabel>

                <Controller
                  name="service_category"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      options={categories.map((item) => ({
                        value: item.title,
                        label: item.title,
                      }))}
                      isLoading={isEmpty(categories)}
                      placeholder="Service Category"
                      {...field}
                    />
                  )}
                />
              </FormControl>

              <FormControl id="tags" isInvalid={errors.tags} isRequired>
                <FormLabel>Tags</FormLabel>

                <Controller
                  name="tags"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      options={categories.map((item) => ({
                        value: item.title,
                        label: item.title,
                      }))}
                      isMulti
                      isLoading={isEmpty(categories)}
                      placeholder="Tags"
                      {...field}
                    />
                  )}
                />
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
