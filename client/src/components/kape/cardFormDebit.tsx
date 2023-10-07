import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
export default function CardFormDebit() {

  const [topUp, setTopUp] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("topUp", topUp);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    console.log("Form Data:", formData);

    setTopUp("");
    setSelectedFile(null);
  };

  return (
    <>
      <Box w={"40%"}>
        <form onSubmit={handleSubmit}>
          <Card bgColor={"white"} color={"black"}>
            <CardBody ps={6} padding={"50px"}>
              <Heading size="sm" textAlign={"center"}>
                Top Up
              </Heading>
              <Box pb={3} mt={"20px"} mb={"-4"}>
                <FormLabel>Jumlah Top Up</FormLabel>
              </Box>
              <FormControl id="invoice" isRequired>
                <Input name="invoice" type="number" />
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
              <Button
                mt={"40px"}
                type="submit"
                colorScheme="blue"
                width={"100%"}
              >
                Kirim
              </Button>
              <Text fontSize={"10px"} fontFamily={"monospace"} mt={"5px"}>
                silahkan isi ke nomor rekening berikut berikut
              </Text>
              <Text fontSize={"13px"} fontFamily={"monospace"}>
                BRI: 308394949948948948. An : Nurhazizah
              </Text>
            </CardBody>
          </Card>
        </form>
        <Box>
          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Uploaded"
              width="500px"
            />
          )}
        </Box>
      </Box>
    </>
  );
}


