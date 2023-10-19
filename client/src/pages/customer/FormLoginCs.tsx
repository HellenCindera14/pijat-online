import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, FormControl, FormLabel, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { GoCopilot } from "react-icons/go";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/customer/useLogin";

export default function FormLoginCs() {
  const { handleChange, handleLogin } = useLogin();

  return (
    <>
      <Stack bgColor={"teal.400"} w={"100%"} h={"100vh"} justifyContent={"center"}>
        <Center>
          <Card w={"30%"} lineHeight={"1.2em"} boxShadow={"dark-lg"} borderRadius={"25px"}>
            <CardHeader display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <GoCopilot color={"teal"} fontSize={"4em"} />
              <Heading fontSize={"2xl"}>Login</Heading>
            </CardHeader>
            <CardBody>
              <Text>Masuk dan dapatkan layanan pijat sesuai keinginan anda!</Text>
              <FormControl mt={5}>
                <Box>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" onChange={handleChange} />
                </Box>
                <Box>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password" onChange={handleChange} />
                </Box>
              </FormControl>
            </CardBody>
            <CardFooter flexDirection={"column"} gap={5}>
              <Link to="#">
                <Text textAlign={"end"}>Lupa Password</Text>
              </Link>
              <Button onClick={handleLogin} colorScheme="teal">
                Login
              </Button>
              <Flex alignItems={"center"} gap={3}>
                <Text>Belum punya akun?</Text>
                <Link to="/services">
                  <Text color="teal" fontWeight={"bold"}>
                    Registasi dulu!
                  </Text>
                </Link>
              </Flex>
            </CardFooter>
          </Card>
        </Center>
      </Stack>
    </>
  );
}
