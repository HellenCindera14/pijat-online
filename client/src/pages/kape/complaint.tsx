import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import LayoutPageKp from "../../layouts/kape/LayoutPageKp";

export default function Complaint() {
  return (
    <>
      <LayoutPageKp>
        <Stack mt={"7.5vh"} spacing={4}>
          <Text>this page complaint</Text>
        </Stack>
      </LayoutPageKp>
    </>
  );
}
