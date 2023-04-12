import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  Drawer,
  useDisclosure,
  Input,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  Box,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { searchApi } from "@/services";
import { isEmpty } from "lodash";

export const Browse = () => {
  const router = useRouter();
  const timeout = useRef();
  const inputRef = useRef();
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDebounceSearch = useCallback(() => {
    clearTimeout(timeout.current);
    // If there is no search term, do not make API call
    if (!inputRef.current.value.trim()) {
      setResult([]);
      return;
    }

    timeout.current = setTimeout(() => {
      searchApi
        .get(inputRef.current.value)
        .then((res) => {
          const { tasks, users } = res?.data;

          setUsers(users || []);
          setTasks(tasks || []);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 600);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setUsers([]);
      setTasks([]);
    }
  }, [isOpen]);

  return (
    <>
      <Button
        onClick={onOpen}
        style={{
          backgroundColor: "white",
          color: "black",
          borderColor: "black",
        }}
      >
        Browse
      </Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <DrawerBody>
              <Input
                ref={inputRef}
                placeholder="Search"
                onChange={handleDebounceSearch}
              />
              {!isEmpty(users) && (
                <Box p="10px">
                  <Text fontSize="xl">Users</Text>
                  <UnorderedList>
                    {users.map((user) => (
                      <ListItem key={user.username}>
                        <Link href={`/profile/${user.username}`}>
                          {user.username}
                        </Link>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              )}
              {!isEmpty(tasks) && (
                <Box p="10px">
                  <Text fontSize="xl">Tasks</Text>
                  <UnorderedList>
                    {tasks.map((task) => (
                      <ListItem key={task.title}>
                        <Link href={`/tasks/${task.title}`}>{task.title}</Link>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              )}
            </DrawerBody>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
