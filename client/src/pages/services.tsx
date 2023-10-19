import { Box, Flex, Stack, Text, Image } from "@chakra-ui/react";
import Layout from "../layouts/home/Layout";
import pijat from "../assets/images/pijat.jpg";

export default function Services() {
  return (
    <>
      <Layout>
        <Stack mt={"8vh"}>
          <Flex>
            <Box>
              <Text>this is services</Text>
            </Box>
            <Box>
              <Image src={pijat} alt="Services" />
            </Box>
          </Flex>
        </Stack>
      </Layout>
    </>
  );
}
