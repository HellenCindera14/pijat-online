import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, useDisclosure } from "@chakra-ui/react";

export default function ModalAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} size="sm" colorScheme="orange">
        Action
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Eannoy</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nama</FormLabel>
              <Input placeholder="nama" />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>E-mail</FormLabel>
              <Input placeholder="email" />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Alamat</FormLabel>
              <Input placeholder="alamat" />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Jenis Kelamin</FormLabel>
              <RadioGroup defaultValue="Itachi">
                <HStack spacing="24px">
                  <Radio value="Sasuke">Laki - Laki</Radio>
                  <Radio value="Nagato">Perempuan</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>No. Hp</FormLabel>
              <Input placeholder="no. hp" />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Foto Profile</FormLabel>
              <Input type="file" placeholder="foto" />
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
