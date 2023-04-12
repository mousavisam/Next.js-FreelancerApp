import { useCallback, useEffect, useState } from "react";
import { proposalApi } from "@/services";
import {
  Box,
  Stack,
  Button,
  Card,
  CardBody,
  Heading,
  CardFooter,
  Image,
  Text,
  Flex,
  Badge,
  Avatar,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdAccessTime, MdOutlineAttachMoney } from "react-icons/md";
import { ChangeProposalStatus } from "./components/ChangeProposalStatus";

const BADGE_COLORS = [
  "red",
  "blackAlpha",
  "gray",
  "orange",
  "yellow",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
  "linkedin",
  "facebook",
  "messenger",
  "whatsapp",
  "twitter",
  "telegram",
];

export const Proposals = () => {
  const [proposals, setProposals] = useState([]);
  const [sendProposalId, setSendProposalId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAction = (id) => {
    setSendProposalId(id);
    onOpen();
  };

  const handleGetProposals = useCallback(() => {
    proposalApi
      .get()
      .then((res) => {
        setProposals(res?.data || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    handleGetProposals();
  }, [handleGetProposals]);

  return (
    <Box p="10px">
      <Text fontSize="3xl" p="10px">
        Proposals
      </Text>
      {proposals.map((proposal, idx) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          mb="10px"
          w="100%"
          key={proposal.creation_time + proposal.id}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={`https://picsum.photos/id/${idx}/200`}
            alt={proposal.title}
          />

          <Stack w="100%">
            <CardBody>
              <Flex alignItems="center" gap="10px">
                <Heading size="md">{proposal.task}</Heading>
                <Badge ml="1" fontSize="0.8em" colorScheme="green">
                  {proposal.status}
                </Badge>
              </Flex>

              <Text py="2">{proposal.description}</Text>

              <List spacing={3}>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={MdAccessTime} color="green.500" />
                  <Text fontWeight="bold">Delivery time in day: </Text>
                  <Text ml="10px">{proposal.delivery_time_in_day}</Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={MdOutlineAttachMoney} color="green.500" />
                  <Text fontWeight="bold">Payment Amount: </Text>
                  <Text ml="10px">{proposal.payment_amount}</Text>
                </ListItem>
              </List>
            </CardBody>

            <CardFooter w="100%">
              <Flex w="100%" alignItems="center" justifyContent="space-between">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => handleAction(proposal.id)}
                >
                  Action
                </Button>
              </Flex>
              <ChangeProposalStatus
                isOpen={isOpen}
                onClose={onClose}
                id={sendProposalId}
                callback={handleGetProposals}
              />
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Box>
  );
};
