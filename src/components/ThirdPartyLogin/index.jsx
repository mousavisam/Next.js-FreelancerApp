import { Button, Center, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export const ThirdPartyLogin = () => {
  const { data } = useSession();
  const [provider, setProvider] = useState(null);
  const handleGetProviders = useCallback(() => {
    getProviders().then((res) => {
      setProvider(res?.google);
    });
  }, []);

  useEffect(() => {
    handleGetProviders();
  }, [handleGetProviders]);

  if (!provider) return <div />;

  if (data) {
    return (
      <>
        Signed in as {data.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <Button
      w={"full"}
      maxW={"md"}
      variant={"outline"}
      leftIcon={<FcGoogle />}
      onClick={() => signIn(provider.id)}
    >
      <Center>
        <Text>Sign in with Google</Text>
      </Center>
    </Button>
  );
};
