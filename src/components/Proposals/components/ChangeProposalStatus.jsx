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
  useToast,
  Select,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { proposalApi } from "@/services";

const schema = yup
  .object()
  .shape({
    status: yup.string(),
  })
  .required();

export const ChangeProposalStatus = ({ id, callback, isOpen, onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const toast = useToast();

  const onSubmit = (values) => {
    proposalApi
      .patch({ ...values, proposal_id: id })
      .then((res) => {
        toast({
          title: "Proposal sent!",
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>Send Proposal</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl id="status" isInvalid={errors.status} isRequired>
            <FormLabel>Select status</FormLabel>
            <Select placeholder="Select option" {...register("status")}>
              <option value="REJECT">Reject</option>
              <option value="ACCEPT">Accept</option>
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
  );
};
