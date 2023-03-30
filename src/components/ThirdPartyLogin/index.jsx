import { userApi } from "@/services";
import { setUser } from "@/store/reducers/userSlice";
import { setStorageToken } from "@/utils/storage";
import { Button, Center, Text, useToast } from "@chakra-ui/react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";

export const ThirdPartyLogin = ({ onHasData, onLoading, onSelectType }) => {
  const toast = useToast();
  const { data } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  console.info({ data });
  const [provider, setProvider] = useState(null);
  const handleGetProviders = useCallback(() => {
    getProviders().then((res) => {
      setProvider(res?.google);
    });
  }, []);

  const handleGetLoginData = useCallback(() => {
    userApi
      .socialLoginData()
      .then((res) => {
        console.info({ res });
        const { data } = res;
        if (data?.type) {
          router.push("/profile");
        } else {
          onSelectType(true);
        }
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Error!",
          description: "Something went wrong, please login manually!",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      })
      .finally(() => {
        onHasData(false);
      });
  }, [onHasData, onSelectType]);

  const handleSignIn = useCallback(() => {
    if (!data) return;
    onLoading(true);
    onHasData(true);
    try {
      const loginData = {
        username: data.user.email.split("@")[0],
        email: data.user.email,
        first_name: data.user.name.split(" ")[0],
        last_name: data.user.name.split(" ")[1],
      };
      userApi
        .socialLogin(loginData)
        .then((res) => {
          console.info({ res });
          const { access_token, refresh_token } = res?.data;
          dispatch(
            setUser({
              username: loginData.username,
              access_token,
              refresh_token,
            })
          );
          setStorageToken(access_token);
          handleGetLoginData();
        })
        .catch((error) => {
          console.error(error);
          toast({
            title: "Error!",
            description: "Something went wrong, please login manually!",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        })
        .finally(() => {
          onLoading(false);
        });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error!",
        description: "Something went wrong, please login manually!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      onLoading(false);
      onHasData(false);
    }
  }, [data, onLoading, onHasData, handleGetLoginData]);

  useEffect(() => {
    handleGetProviders();
  }, [handleGetProviders]);

  useEffect(() => {
    handleSignIn();
  }, [handleSignIn]);

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
