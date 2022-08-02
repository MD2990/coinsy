import React, { useEffect } from "react";
import { Input, WrapItem, Button, Text, Wrap } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import state from "../store";
import { IconButton } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

export default function SearchBox({ json }) {
  const snap = useSnapshot(state);
  const router = useRouter();
  useEffect(() => {
    state.data = json;
  }, [json]);

  useEffect(() => {
    state.results = json.filter((coin) =>
      coin.name.toLowerCase().includes(snap.input.toLowerCase())
    );
  }, [json, snap.input]);

  const handleChange = (e) => {
    state.input = e.target.value.toLowerCase();
  };

  //  disable the button fo 5 seconds after it is clicked and then enable it again
  const handleClick = () => {
    let t = 10000;
    setTimeout(() => {
      state.disabled = false;
    }, t);
    state.disabled = true;
    state.timer = 10;
    // save the timeout seconds to a variable so we can show it in the UI
  };


  useEffect(() => {
    if (state.disabled) {
      const e = setInterval(() => {
        state.timer -= 1;
      }, 1000);

      return () => clearInterval(e);
    }
  }, [snap.disabled]);

  return (
    <Wrap justify="center" align="end" spacing={(1, 2, 4)}>
      <WrapItem>
        <Text
          fontSize={["xx-small", "md", "lg", "xl"]}
          fontFamily="sans-serif"
          fontWeight="semibold"
          color="blue.300"
        >
          Showing {snap.results.length} of {snap.data.length}{" "}
        </Text>
      </WrapItem>
      <WrapItem>
        <Input
          placeholder="Search"
          size="lg"
          onChange={handleChange}
          value={snap.input}
        />
      </WrapItem>
      <WrapItem>
        <IconButton
          size={["sm", "md", "lg"]}
          colorScheme="blue"
          aria-label="Clear Search"
          icon={<RepeatIcon />}
          onClick={() => (state.input = "")}
          disabled={!snap.input}
        />
      </WrapItem>

      <WrapItem>
        <Button
          disabled={snap.disabled}
          colorScheme="blue"
          size={["sm", "md", "lg"]}
          onClick={() => {
            handleClick();

            router.replace(router.asPath);
            state.input = "";
          }}
        >
          {snap.disabled
            ? `Will be enabled again after ${snap.timer} Sec`
            : "Revalidate Data"}
        </Button>
      </WrapItem>
    </Wrap>
  );
}
