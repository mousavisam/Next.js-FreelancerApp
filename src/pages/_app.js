import { Header } from "@/components";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";

import { store, persistor } from "../store/configureStore";

const headerComponents = ["Faq", "Profile", "Dashboard"];

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
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
        <SessionProvider session={session}>
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
              <ChakraProvider>
                {headerComponents.includes(Component.name) && <Header />}
                <Component {...pageProps} />
              </ChakraProvider>
            </PersistGate>
          </Provider>
        </SessionProvider>
      )}
    </div>
  );
}
