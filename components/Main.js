import React from "react";
import { Wrap, WrapItem, Center, Text, Box, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useSnapshot } from "valtio";
import state from "../store";

export default function Main() {

  
  //  convert the date and time   to a readable format
  function convertDate(date) {
    var date = new Date(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return (
      date.getMonth() +
      1 +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear() +
      "  " +
      strTime
    );
  }

  const TheText = ({ text, value, change = false }) => (
    <Text
      color="blackAlpha.700"
      fontWeight={"bold"}
      textAlign={"left"}
      textTransform="capitalize"
      letterSpacing={"0.04em"}
      fontSize={["xs", "sm", "md", "md"]}
    >
      {text}
      <Text
        textTransform="lowercase"
        fontWeight={"normal"}
        textShadow="0px 0px 20px rgba(0, 0, 0, 0.2)"
        _hover={{ textShadow: "0px 0px 5px  rgba(0, 0, 0, 0.4) " }}
        as="span"
        ml="1"
        color={
          change ? (value < 0 ? "red.400" : "green.400") : "blackAlpha.900"
        }
      >
        {value}
      </Text>
    </Text>
  );

  const snap = useSnapshot(state);
  return (
    <Wrap justify={"center"}>
      {snap.results.map(
        ({
          id,
          name,
          current_price,
          low_24h,
          high_24h,
          total_volume,
          market_cap,
          image,
          price_change_percentage_24h,
          last_updated,
        }) => {
          return (
            <WrapItem key={id}>
              <Box
                shadow={"2xl"}
                rounded={"2xl"}
                textAlign={"center"}
                p="4"
                m="4"
              >
                <VStack
                  _hover={{
                    transform: "translateY(-4px) scale(1.05) ",
                    transition: "all 0.4s ease",
                    textShadow: "0px 0px 15px  rgba(0, 0, 0, 1) ",
                  }}
                >
                  <Image
                    src={image}
                    layout={"intrinsic"}
                    width={"35px"}
                    height={"35px"}
                    alt={name}
                  />
                  <Text
                    fontFamily="serif"
                    fontWeight={"black"}
                    letterSpacing="wider"
                    fontSize={["sm", "md", "lg", "xl"]}
                  >
                    {name}
                  </Text>
                </VStack>

                <TheText text={"current price:"} value={current_price} />
                <TheText text={"high:"} value={high_24h} />
                <TheText text={"low:"} value={low_24h} />
                <TheText text={"total volume:"} value={total_volume} />
                <TheText text={"marketCap:"} value={market_cap} />
                <TheText
                  text={"price Change:"}
                  change
                  value={price_change_percentage_24h}
                />
                <TheText
                  text={"last updated:"}
                  value={convertDate(last_updated)}
                />
              </Box>
            </WrapItem>
          );
        }
      )}

      {!snap.results.length && (
        <Center isTruncated p="4">
          {" "}
          <Text
            color="blue.500"
            fontFamily="sans"
            fontSize={[10, 15, 20, 25]}
            textAlign="center"
            isTruncated
          >
            Nothing to Show for
            <Text
              as="span"
              color="red.400"
              ml="2"
              fontWeight="bold"
              textShadow="0px 0px 10px  pink "
            >
              {snap.input}
            </Text>{" "}
            {"  "}
            &#128532;
          </Text>{" "}
        </Center>
      )}
    </Wrap>
  );
}

