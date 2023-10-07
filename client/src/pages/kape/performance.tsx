import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import LayoutPageKp from "../../layouts/kape/LayoutPageKp";

export default function Performance() {
  return (
    <>
      <LayoutPageKp>
        <Stack mt={"7.5vh"} spacing={4}>
          <Text>this page performance</Text>
        </Stack>
      </LayoutPageKp>
    </>
  );
}
