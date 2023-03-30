import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  Drawer,
  IconButton,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  useDisclosure,
  useToast,
  Select,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { skillApi } from "@/services";

const schema = yup

  .object()
  .shape({
    skill_name: yup.string().required(),
    level: yup.string().required(),
  })
  .required();

export const AddSkill = ({ callback }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = (values) => {
    skillApi
      .post(values)
      .then((res) => {
        console.info({ res });
        toast({
          title: "Skill added!",
          description: "Skill added successfully!",
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
        Add Skill
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add Skill</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl
              mt={4}
              id="Search"
              isInvalid={errors.skill_name}
            >          
              <FormLabel>Search</FormLabel>
              <Input placeholder="Search"  />
              
            </FormControl>


            <FormControl
              mt={4}
              id="skill_name"
              isRequired
              isInvalid={errors.skill_name}
            >          
              <FormLabel>Skill Name</FormLabel>
              <Input placeholder="Skill Name" {...register("skill_name")} />
            </FormControl>

            <FormControl mt={4} id="level" isInvalid={errors.level} isRequired>
                <FormLabel>Select level</FormLabel>
                <Select placeholder="Select option" {...register("level")}>
                  <option value="JUNIOR">Junior</option>
                  <option value="MID_LEVEL">Mid Level</option>
                  <option value="SENIOR">Senior</option>
                </Select>
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
