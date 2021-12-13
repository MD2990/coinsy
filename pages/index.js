import { Center, Text } from "@chakra-ui/layout";
import Head from "next/head";
import Main from "../components/Main";
import SearchBox from "../components/SearchBox";
import Title from "../components/Title";

export default function Home({ json }) {
  if (!json) {
    return (
      <Center mt="25%">
        <Text
          fontWeight="black"
          fontFamily="cursive"
          fontSize={[25, 35, 45, 55]}
          color="blackAlpha.300"
          textShadow="0px 0px 20px gray"
        >
          Loading...
        </Text>{" "}
      </Center>
    );
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Majid Ahmed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title />

      <SearchBox json={json} />

      <Main />
    </>
  );
}

// components

// get server side props
export async function getStaticProps() {
  const API = process.env.API;
  const res = await fetch(API);
  const json = await res.json();

  return {
    props: {
      json,
    },
    revalidate: 1,
  };
}
