import { Box, Button, Center, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { GoCopilot } from "react-icons/go";
import { Link } from "react-router-dom";
export default function RegisterCs() {
  return (
    <>
      <Center>
        <Box display={"flex"} flexDirection={"column"} h={"100vh"} w={"100vh"} justifyContent={"center"} alignItems={"center"}>
          <GoCopilot color={"teal"} fontSize={"4em"} />
          <Text fontSize={"xl"} fontWeight={"bold"} color={"teal"}>
            Welcome to Pijat Online
          </Text>
          <Box w={"40%"}>
            <FormControl>
              <Box>
                <FormLabel>Nama</FormLabel>
                <Input
                  type="text"
                  name="name"
                  //   onChange={handleChangeLogin}
                />
              </Box>
              <Box>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  //   onChange={handleChangeLogin}
                />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  //   onChange={handleChangeLogin}
                />
              </Box>
            </FormControl>
          </Box>
          <Box display={"flex"} alignItems={"start"} py={2} flexDirection={"column"}>
            <Box display={"flex"} gap={2}>
              <Text>Sudah punya akun,</Text>
              <Link to={"/login"}>
                <Text color={"teal"} fontWeight={"bold"}>
                  Ayo Login!
                </Text>
              </Link>
            </Box>
            <Text>Lupa Password?</Text>
            <Link to={"/auth/register"}>
              <Button colorScheme="teal">Register</Button>
            </Link>
          </Box>
        </Box>
      </Center>
    </>
  );
}
