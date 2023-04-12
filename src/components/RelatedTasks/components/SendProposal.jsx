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
  useToast,
  Textarea,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { proposalApi } from "@/services";

const schema = yup
  .object()
  .shape({
    description: yup.string(),
    payment_amount: yup.string(),
    delivery_time_in_day: yup.number(),
  })
  .required();

export const SendProposal = ({ id, callback, isOpen, onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const toast = useToast();

  const onSubmit = (values) => {
    proposalApi
      .post({ ...values, task_id: id })
      .then((res) => {
        console.info({ res });
        toast({
          title: "Proposal sent!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
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
          <FormControl
            isRequired
            id="delivery_time_in_day"
            isInvalid={errors.delivery_time_in_day}
          >
            <FormLabel>Delivery time in day</FormLabel>
            <Input
              type="number"
              placeholder="Delivery time in day"
              {...register("delivery_time_in_day")}
            />
          </FormControl>

          <FormControl
            mt={4}
            isRequired
            id="payment_amount"
            isInvalid={errors.payment_amount}
          >
            <FormLabel>Payment Amount</FormLabel>
            <Input
              placeholder="Payment Amount"
              {...register("payment_amount")}
            />
          </FormControl>

          <FormControl
            mt={4}
            id="description"
            isRequired
            isInvalid={errors.description}
          >
            <FormLabel>Description</FormLabel>
            <Textarea {...register("description")} />
          </FormControl>

          <FormControl mt={4} id="attachment">
            <FormLabel>Attachment</FormLabel>
            <Input type="file" placeholder="Choose a file" />
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
