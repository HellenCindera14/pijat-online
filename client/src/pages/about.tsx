import { Stack, Text } from "@chakra-ui/react";
import Layout from "../layouts/home/Layout";
import React from "react";

export default function About() {
  return (
    <>
      <Layout>
        <Stack mt={"8vh"}>
          <Text>This is about us</Text>
        </Stack>
      </Layout>
    </>
  );
}
