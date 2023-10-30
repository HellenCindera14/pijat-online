import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, FormControl, FormLabel, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import kastemer from "../../assets/images/kastemer.jpg";
import { useRegister } from "../../hooks/customer/useRegister";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function FormRegisCs() {
  const { handleChange, handleRegister } = useRegister();
  return (
    <>
      <Stack>
        <Flex p={0} justifyContent={"space-evenly"}>
          <Box p={10} w={"180vh"}>
            <Link to={"/services"}>
              <Flex align={"center"} gap={6}>
                <GoArrowLeft size={"2em"} color={"teal"} />
                <Text fontWeight={"bold"} color={"teal"}>
                  Kemabli
                </Text>
              </Flex>
            </Link>
            <Image src={kastemer} />
          </Box>
          <Card w={"100%"} h={"100vh"} bgColor={"teal.400"} color={"white"} px={"15vh"} py={"10vh"} borderStartRadius={"50px"} borderEndRadius={"0px"}>
            <CardHeader>
              <Heading>
                Buat Akun Pijat-Online <Divider borderWidth="3px" borderEndRadius={"50px"} borderColor={"teal.200"} w={"27vh"} />
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>Daftarkan akun Anda sekarang dan nikmati semua manfaat dan fitur yang kami tawarkan!</Text>
              <FormControl mt={5}>
                <Box>
                  <FormLabel>Nama</FormLabel>
                  <Input type="text" name="name" onChange={handleChange} />
                </Box>
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
            <CardFooter flexDirection={"column"} gap={3}>
              <Button colorScheme="whiteAlpha" onClick={handleRegister} w={"100%"} borderRadius={"15px"}>
                Register
              </Button>
              <Flex alignItems={"center"} gap={2} justifyContent={"center"}>
                <Divider borderWidth="2px" borderRadius={"50px"} w={"20vh"} />
                <Text>atau</Text>
                <Divider borderWidth="2px" borderRadius={"50px"} w={"20vh"} />
              </Flex>
              <Center>
                <Button w={"100%"} maxW={"md"} variant={"outline"} leftIcon={<FcGoogle />}>
                  <Center>
                    <Text color={"white"}>Sign in with Google</Text>
                  </Center>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Flex>
      </Stack>
    </>
  );
}
