import {
  Box,
  Center,
  Text,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { Header as HeaderUI } from "../../components";

import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

const Header = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue) {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  // const handleToggleComplete = (todoId) => {
  //   const updatedTodos = todos.map((todo) => {
  //     if (todo.id === todoId) {
  //       return { ...todo, completed: !todo.completed };
  //     } else {
  //       return todo;
  //     }
  //   });
  //   setTodos(updatedTodos);
  // };

  const handleDeleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <>
      <HeaderUI />
      <Center>
        <Box h="600px" w="1000px">
          <Text as="b" fontSize="40px">
            List of Task
          </Text>
          <Button
            borderRadius="15px"
            style={{
              marginLeft: "900px",
              backgroundColor: "white",
              color: "black",
            }}
            variant="outline"
            onClick={handleAddTodo}
          >
            Add Task
            <AddIcon />
          </Button>
          <Input
            size="md"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <Card>
                  <CardBody>
                    <Text
                      style={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {todo.text}
                    </Text>
                  </CardBody>
                </Card>
                <Button
                  borderRadius="15px"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </Box>
      </Center>
    </>
  );
};

export default Header;
