import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";

export default function ModalComplaint() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} variant="ghost" colorScheme="teal">
        Layanan Aduan
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Laporan</ModalHeader>
          <Text ps={6}>Laporkan saja ketika ada perbuatan yang kesalahan</Text>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Kepada</FormLabel>
              <Input placeholder="nama" />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Subject</FormLabel>
              <Input placeholder="subject" />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Laporan anda</FormLabel>
              <Input placeholder="Tuliskan laporan anda" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
