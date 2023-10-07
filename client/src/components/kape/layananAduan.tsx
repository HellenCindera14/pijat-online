import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import React from "react";

export default function FormPengaduan() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" size={"sm"} color={"white"}>
        Laporan
      </Button>
      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={2}>
          <ModalHeader textAlign={"center"}>Form Pengaduan</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={1}></ModalBody>

          <ModalBody>
            <Box mb={"1em"}>
              <Text> Subject </Text>
              <Input placeholder="Contoh : Pemerkosaan" />
            </Box>
            <Box mb={"1em"}>
              <Text> Keterangan </Text>
              <Textarea
                placeholder="Masukkan complain Mu"
                size="lg"
                value={"Masukkan complain Mu"}

              />
            </Box>
            <Box mb={"-1em"}>
              <Text> Lampiran Gambar </Text>
              <Input id="file-input" name="attachment" p={1} type="file" accept=".jpg, .jpeg, .png" placeholder="lampiran berformat .jpg, .jpeg, .png" />
            </Box>
            <Box>
              <Button mt={"40px"} type="submit" colorScheme="blue" width={"100%"} onClick={onClose}>
                Kirim
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
