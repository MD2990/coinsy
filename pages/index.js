import { Center, Text } from "@chakra-ui/layout";
import Head from "next/head";
import Main from "../components/Main";
import SearchBox from "../components/SearchBox";
import Title from "../components/Title";

export default function Home({ json }) {
  return (
    <>
      <Head>
        <title>Crypto Currency Realtime Price </title>
        <meta name="description" content="coins price API App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!json ? (
        <Center mt="15%">
          <Text
            fontWeight="black"
            fontFamily="sans-serif"
            fontSize={[25, 35, 45, 55]}
            color="blackAlpha.300"
            textShadow="0px 0px 20px gray"
          >
            Loading...
          </Text>{" "}
        </Center>
      ) : (
        <>
          <Title />
          <SearchBox json={json} /> <Main />
        </>
      )}
    </>
  );
}

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
