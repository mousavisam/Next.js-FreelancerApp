import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { certificateApi } from "@/services";

const URL_REGEX =
  /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/;

const schema = yup
  .object()
  .shape({
    title: yup.string(),
    description: yup.string(),
    earned_date: yup.string(),
    link: yup.string().matches(URL_REGEX, "Link is not valid"),
  })
  .required();

export const AddCertificate = ({ callback }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = (values) => {
    certificateApi
      .post(values)
      .then((res) => {
        console.info({ res });
        toast({
          title: "Certificate added!",
          description: "Certificate added successfully!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        callback();
        onClose();
      })
      .catch((err) => {
        console.error(err);
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
      <Button colorScheme="blue" onClick={onOpen}>
        Add Certificate
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add Certificate</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl id="title" isRequired isInvalid={errors.title}>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title" {...register("title")} />
            </FormControl>

            <FormControl
              mt={4}
              id="description"
              isRequired
              isInvalid={errors.description}
            >
              <FormLabel>Description</FormLabel>
              <Input placeholder="Description" {...register("description")} />
            </FormControl>

            <FormControl
              mt={4}
              id="earned_date"
              isRequired
              isInvalid={errors.earned_date}
            >
              <FormLabel>Earned Date</FormLabel>
              <Input
                placeholder="Earned Date"
                type="date"
                {...register("earned_date")}
              />
            </FormControl>

            <FormControl mt={4} id="link" isRequired isInvalid={errors.link}>
              <FormLabel>Link</FormLabel>
              <Input placeholder="Link" {...register("link")} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              loadingText="Submitting"
              colorScheme="blue"
              mr={3}
              isLoading={isSubmitting}
              type="submit"
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
