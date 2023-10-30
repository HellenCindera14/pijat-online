import { Box, Button, Center, Text } from "@chakra-ui/react";
import { GoCopilot } from "react-icons/go";
import { Link } from "react-router-dom";

export default function ConnectionCs() {
  return (
    <>
      <Center>
        <Box display={"flex"} flexDirection={"column"} h={"100vh"} w={"100vh"} justifyContent={"center"} alignItems={"center"}>
          <GoCopilot color={"teal"} fontSize={"4em"} />
          <Text fontSize={"xl"} fontWeight={"bold"} color={"teal"}>
            Welcome to Pijat Online
          </Text>
          <Box display={"flex"} gap={3}>
            <Link to={"register"}>
              <Button colorScheme="teal">Register </Button>
            </Link>
            <Link to={"/cs/login"}>
              <Button colorScheme="teal">Login </Button>
            </Link>
          </Box>
        </Box>
      </Center>
    </>
  );
}
