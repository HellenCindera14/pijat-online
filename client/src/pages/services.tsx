import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import kastemer from "../assets/images/kastemer.jpg";
import pijat from "../assets/images/pijat.jpg";
import Layout from "../layouts/home/Layout";
import Footer from "../components/home/Footer";

export default function Services() {
  return (
    <>
      <Layout>
        <Stack mt={"8vh"}>
          <Box display={"flex"} alignItems={"center"} flexDirection={"column"} mt={10}>
            <Text fontSize={"35px"} fontWeight={"bold"}>
              Welcome to Pijat Online
            </Text>
            <Text w={"70vh"} textAlign={"center"} mt={5}>
              Masuk dan nikmati rileksasi dalam setiap pijatan oleh tukang pijat yang berpengalaman dan profesiaonal
            </Text>
          </Box>
          <Flex justify="center" justifyContent={"space-around"} direction={{ base: "column", md: "row" }} p={5}>
            <Card w={"70vh"}>
              <CardBody display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Heading textAlign={"center"}>Kastemer</Heading>
                <Image src={kastemer} w={"40vh"} h={"35vh"} objectFit={"cover"} />
                <Text>Register atau Login segera rileksasi badan yang pegal - pegal linu dan segera panggil Kang Pijat</Text>
              </CardBody>
              <CardFooter justifyContent={"space-evenly"}>
                <Link to={"/cs/register"}>
                  <Button colorScheme="teal" variant={"ghost"}>
                    Register
                  </Button>
                </Link>
                <Link to={"/cs/login/"}>
                  <Button colorScheme="teal">login</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card w={"70vh"}>
              <CardBody display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Heading textAlign={"center"}>Kang Pijat</Heading>
                <Image src={pijat} w={"55vh"} h={"35vh"} objectFit={"cover"} />
                <Text>Register atau Login sebagi Kang Pijat dan segera dapatkan panggilan Kastemer</Text>
              </CardBody>
              <CardFooter justifyContent={"space-evenly"}>
                <Link to={"/kp/register"}>
                  <Button colorScheme="teal" variant={"ghost"}>
                    Register
                  </Button>
                </Link>
                <Link to={"/kp/login/"}>
                  <Button colorScheme="teal">login</Button>
                </Link>
              </CardFooter>
            </Card>
          </Flex>
          <Footer />
        </Stack>
      </Layout>
    </>
  );
}
