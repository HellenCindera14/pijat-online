import { Box, Button, Center, Text } from "@chakra-ui/react";
import { GoCopilot } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Center>
        <Box display={"flex"} flexDirection={"column"} h={"100vh"} w={"100vh"} justifyContent={"center"} alignItems={"center"}>
          <GoCopilot color={"teal"} fontSize={"4em"} />
          <Text fontSize={"xl"} fontWeight={"bold"} color={"teal"}>
            Welcome to Pijat Online
          </Text>
          <Box display={"flex"} gap={3}>
            <Link to={"/cs/dashboard"}>
              <Button colorScheme="teal">Customer</Button>
            </Link>
            <Link to={"/kape/dashboard"}>
              <Button colorScheme="teal">Kang Pijat</Button>
            </Link>
          </Box>
        </Box>
      </Center>
    </>
  );
}
