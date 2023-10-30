import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <Box bgColor={"gray.700"} color={"white"}>
        <Flex gap={5} alignItems={"center"} justify={"start"} ms={"25vh"} my={"10vh"}>
          <Box>
            <Text fontSize={"50px"} fontWeight={"bold"}>
              Pijat-Online
            </Text>
            <Text fontSize={"25px"} fontWeight={"bold"}>
              Jasa Pijat Panggilan Terpercaya dan Profesional
            </Text>
          </Box>
        </Flex>
        <Flex gap={10} alignItems={"center"} justify={"center"} mb={"10vh"}>
          <Box w={"75vh"}>
            <Text fontSize={"20px"} fontWeight={"bold"}>
              Pijat-Online INDONESIA
            </Text>
            <Text>Permata Bintaro Residence, Jl. Elang IV Kav.28, Rt.004/Rw.001 Sawah Lama, Ciputat, Tangerang Selatan Banten - 15413</Text>
          </Box>
          <Box w={"75vh"}>
            <Text fontWeight={"bold"}>Sosial Media</Text>
            <Flex gap={5} mt={2}>
              <Button colorScheme="teal" variant="outline">
                <FiInstagram size="20px" />
              </Button>
              <Button colorScheme="teal" variant="outline">
                <FiFacebook size="20px" />
              </Button>
              <Button colorScheme="teal" variant="outline">
                <BsWhatsapp size="20px" />
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
