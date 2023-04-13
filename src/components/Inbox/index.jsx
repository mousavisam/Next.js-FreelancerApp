import { Flex, Divider } from "@chakra-ui/react";
import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { getStorageUsername } from "@/utils/storage";

import { Footer } from "./Footer";
import { Messages } from "./Messages";

const SOCKET_URL = `wss://skill-tree.herokuapp.com/ws/chat/lobby/`;

export const Inbox = () => {
  const username = getStorageUsername() || "Unknown";
  const [socketUrl, setSocketUrl] = useState(SOCKET_URL);
  const [messageHistory, setMessageHistory] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const handleSendMessage = useCallback((inputMessage) => {
    console.info("handleSendMessage", inputMessage);
    const data = {
      message: inputMessage,
      name: username,
    };
    console.info({ data });
    sendMessage(JSON.stringify(data));
  }, []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  console.info({ connectionStatus });

  useEffect(() => {
    console.info({ lastMessage });
    if (lastMessage !== null) {
      let message = {};
      try {
        message = JSON.parse(lastMessage?.data);
      } catch (error) {
        console.error(error);
      }
      console.info({ message });
      setMessageHistory((prev) => prev.concat(message));
    }
  }, [lastMessage, setMessageHistory]);

  useEffect(() => {
    setSocketUrl(SOCKET_URL);
  }, []);

  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w={["100%", "100%", "40%"]} h="90%" flexDir="column">
        {/* <Header />
        <Divider w="100%" borderBottomWidth="3px" color="black" mt="5" /> */}
        <Messages messages={messageHistory} />
        <Divider w="100%" borderBottomWidth="3px" color="black" mt="5" />
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
          disabled={readyState !== ReadyState.OPEN}
        />
      </Flex>
    </Flex>
  );
};
