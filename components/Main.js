import React from "react";
import { Wrap, WrapItem, Center, Text, Box, StatLabel } from "@chakra-ui/react";
import Image from "next/image";

export default function Main({
  id,
  name,
  current_price,
  symbol,
  total_volume,
  marketcap,
  image,
  priceChange,
}) {
  // create a function to convert the date and time   to a readable format
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

  // create a function to round the numbers to 2 decimal places

  function round(value) {
    return Number(Math.round(value + "e" + 3) + "e-" + 3);
  }

  return (
    // high_24h: 49817,
    //    low_24h: 48230,

    <WrapItem>
      <Center>
        <Box shadow={"2xl"} rounded={"2xl"} textAlign={"center"} p="4" m="4">
          <Image
            src={image}
            layout={"intrinsic"}
            width={"25px"}
            height={"25px"}
            alt={name}
          />
          <Text>{name}</Text>
          <Text textAlign={"left"}>current_price{current_price}</Text>
          <Text textAlign={"left"}> total_volume{total_volume}</Text>
          <Text textAlign={"left"}>marketcap {marketcap}</Text>
          <Text textAlign={"left"}>priceChange{priceChange}</Text>
        </Box>
      </Center>
    </WrapItem>
  );
}
