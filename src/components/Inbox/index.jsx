import { Flex, Divider } from "@chakra-ui/react";
import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { getStorageUsername } from "@/utils/storage";

import { Footer } from "./Footer";
import { Messages } from "./Messages";

const SOCKET_URL = `ws://127.0.0.1:8000/ws/`;

export const Inbox = () => {
  const [socketUrl, setSocketUrl] = useState(SOCKET_URL);
  const [messageHistory, setMessageHistory] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const handleSendMessage = useCallback(() => {
    sendMessage(inputMessage);
  }, []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  useEffect(() => {
    setSocketUrl(SOCKET_URL + getStorageUsername());
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
        />
      </Flex>
    </Flex>
  );
};
