import { useRouter } from "next/router";
import { AuthLayout, HeaderLayout, Inbox as InboxUI } from "../../components";
import { useEffect } from "react";

const Inbox = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://deep.loca.lt/");
  }, [router]);

  return (
    <HeaderLayout>
      <InboxUI />
    </HeaderLayout>
  );
};

export default Inbox;
