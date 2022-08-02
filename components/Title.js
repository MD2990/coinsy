import { Center, Text } from "@chakra-ui/layout";
import React from "react";

export default function Title() {
  return (
    <Center m="5%" bgGradient="linear(to-t, white,blue.400)" rounded="md">
      <Text
        textAlign="center"
        noOfLines={1}
        fontSize={["lg", "xl", "4xl", "6xl"]}
        fontWeight="light"
        letterSpacing="widest"
        color="whiteAlpha.600"
        fontFamily="fantasy"
        userSelect="none"
        textShadow="0px 0px 25px white"
        p={["0.5rem", "1rem", "1.5rem", "2rem"]}
      >
        Welcome to the Crypto Currency World
      </Text>
    </Center>
  );
}
