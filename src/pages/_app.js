import { Header } from "@/components";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Dashboard from "./dashboard";

const headerComponents = ["Faq", "Profile"];

export default function App({ Component, pageProps }) {
  console.log(Component.name);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      {domLoaded && (
        <ChakraProvider>
          {headerComponents.includes(Component.name) && <Header />}
          <Component {...pageProps} />
        </ChakraProvider>
      )}
    </div>
  );
}
