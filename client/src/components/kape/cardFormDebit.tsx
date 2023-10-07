import {
    Box,
    Button,
    Card,
    CardBody,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text
} from "@chakra-ui/react";
import React from "react";

export default function CardFormDebit() {
  return (
    <>
      <Box w={"40%"}>
        <Card bgColor={"white"} color={"black"}>
          <CardBody ps={6} padding={"50px"}>
            <Heading size="sm" textAlign={"center"}>Top Up</Heading>
            <Box pb={3}>
              <FormLabel>Nama</FormLabel>
            </Box>
            <FormControl id="invoice" isRequired>
              <Input name="invoice" type="text" />
            </FormControl>
            <FormControl id="upload-proof" isRequired mb={5}>
              <FormLabel>Bukti Transfer</FormLabel>
              <Box position={"relative"} mb={5} alignItems={"center"}>
                <Input
                  id="file-input"
                  name="attachment"
                  position={"absolute"}
                  p={1}
                  placeholder="small size"
                  size="md"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </Box>
            </FormControl>
            <Button mt={"40px"} type="submit" colorScheme="blue" width={"100%"}>
              Kirim
            </Button>
            <Text fontSize={"10px"} fontFamily={"monospace"} mt={"5px"}>silahkan isi ke nomor rekening berikut berikut</Text>
            <Text fontSize={"13px"} fontFamily={"monospace"}>BRI: 308394949948948948. An : Nurhazizah</Text>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
