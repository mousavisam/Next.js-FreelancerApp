import Head from "next/head";

import { Landing } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Skill Tree</title>
        <meta name="description" content="Skill Tree App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
}
