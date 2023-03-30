import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  useDisclosure,
  useToast,
  Select as ChakraSelect,
} from "@chakra-ui/react";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { skillApi } from "@/services";
import Select from "react-select";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";

const schema = yup

  .object()
  .shape({
    skill_name: yup.object().required(),
    level: yup.string().required(),
  })
  .required();

export const AddSkill = ({ callback, categories }) => {
  const [skills, setSkills] = useState([]);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = (values) => {
    skillApi
      .post({ ...values, skill_name: values.skill_name.value })
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

  useEffect(() => {
    setSkills(categories);
  }, [categories]);

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
              id="skill_name"
              isInvalid={errors.skill_name}
              isRequired
            >
              <FormLabel>Skill Name</FormLabel>

              <Controller
                name="skill_name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    options={skills.map((item) => ({
                      value: item.title,
                      label: item.title,
                    }))}
                    isLoading={isEmpty(skills)}
                    placeholder="Skill Name"
                    {...field}
                  />
                )}
              />
            </FormControl>

            <FormControl mt={4} id="level" isInvalid={errors.level} isRequired>
              <FormLabel>Select level</FormLabel>
              <ChakraSelect placeholder="Select option" {...register("level")}>
                <option value="JUNIOR">Junior</option>
                <option value="MID_LEVEL">Mid Level</option>
                <option value="SENIOR">Senior</option>
              </ChakraSelect>
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
