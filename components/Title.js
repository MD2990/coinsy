import { Center, Text } from "@chakra-ui/layout";
import React from "react";

export default function Title() {
  return (
    <Center
      m="5%"
      bgGradient="linear(to-t, white,blue.400)"
      rounded="md"
    >
      <Text
        textAlign="center"
        isTruncated
        fontSize={["sm", "lg", "2xl", "5xl"]}
        fontWeight="black"
        letterSpacing="wider"
        color="blue.50"
        fontFamily="cursive"
        userSelect="none"
        textShadow="0px 0px 25px white"
        p={["0.2rem", "0.5rem", "1rem", "1.5rem"]}
      >
        Welcome to the Coins of the World
      </Text>
    </Center>
  );
}
