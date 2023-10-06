import { Box, Center, Text } from "@chakra-ui/react";
import { GoCopilot } from "react-icons/go";

export default function Home() {
  return (
    <>
      <Center>
        <Box display={"flex"} flexDirection={"column"} h={"100vh"} w={"100vh"} justifyContent={"center"} alignItems={"center"}>
          <GoCopilot color={"teal"} fontSize={"4em"} />
          <Text fontSize={"xl"} fontWeight={"bold"} color={"teal"}>
            Welcome to Pijat Online
          </Text>
        </Box>
      </Center>
    </>
  );
}
