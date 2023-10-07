import { Stack, Text } from "@chakra-ui/react";
import LayoutPageKp from "../../layouts/kape/LayoutPageKp";
import React from "react";

export default function Profile() {
  return (
    <>
      <LayoutPageKp>
        <Stack mt={"7.5vh"} spacing={4}>
          <Text>this page profile</Text>
        </Stack>
      </LayoutPageKp>
    </>
  );
}
