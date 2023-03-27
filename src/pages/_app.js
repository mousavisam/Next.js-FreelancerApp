import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./dashboard";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
