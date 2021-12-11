import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function Main({
  open,
  close,
  time_open,
  time_close,
  high,
  low,
  volume,
  market_cap,
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
    <Wrap justify="center" m="4">
      <>
        <Table variant="striped" colorScheme="teal" size="sm">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead isTruncated>
            <Tr>
              <Th>Coin</Th>
              <Th>open time</Th>
              <Th>close time</Th>
              <Th>Open</Th>
              <Th>high</Th>
              <Th>low</Th>
              <Th>close</Th>
              <Th>volume</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>BTC</Td>
              <Td>{convertDate(time_open)}</Td>
              <Td>{convertDate(time_close)}</Td>
              <Td>{round(open)}</Td>
              <Td>{round(high)}</Td>
              <Td>{round(low)}</Td>
              <Td>{round(close)}</Td>
              <Td>{round(volume)}</Td>
            </Tr>
            {/*        <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr> */}
            {/*      <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr> */}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </>
    </Wrap>
  );
}
