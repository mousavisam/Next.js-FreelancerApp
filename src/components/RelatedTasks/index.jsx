import { useCallback, useEffect, useState } from "react";
import { taskApi } from "@/services";
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
} from "@chakra-ui/react";

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

export const RelatedTasks = () => {
  const [tasks, setTasks] = useState([]);

  const handleGetRelatedTasks = useCallback(() => {
    taskApi
      .getRelatedTasks()
      .then((res) => {
        console.info({ res });
        setTasks(res?.data || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    handleGetRelatedTasks();
  }, [handleGetRelatedTasks]);

  return (
    <Box p="10px">
      <Text fontSize="3xl" p="10px">
        Related Tasks
      </Text>
      {tasks.map((task, idx) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          mb="10px"
          w="100%"
          key={task.creation_time + task.id}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={`https://picsum.photos/id/${idx}/200`}
            alt={task.title}
          />

          <Stack w="100%">
            <CardBody>
              <Flex>
                <Heading size="md">{task.title}</Heading>
                <Badge ml="1" fontSize="0.8em" colorScheme="green">
                  {task.status}
                </Badge>
              </Flex>

              <Text py="2">{task.description}</Text>
            </CardBody>

            <CardFooter w="100%">
              <Flex w="100%" alignItems="center" justifyContent="space-between">
                <Stack direction="row">
                  {task.tags.map((tag, tagIdx) => (
                    <Badge
                      key={tagIdx}
                      colorScheme={BADGE_COLORS[Math.floor(Math.random() * 16)]}
                    >
                      {tag.title}
                    </Badge>
                  ))}
                </Stack>

                <Button variant="solid" colorScheme="blue">
                  Details
                </Button>
              </Flex>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Box>
  );
};
