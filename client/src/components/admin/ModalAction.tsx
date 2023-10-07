import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { API } from "../../libs/api";

export default function ModalAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const id = ""; // Inisialisasi id dengan nilai awal yang sesuai

  const handleUpdate = () => {
    API.patch(`/endpoint/${id}`, {
      name: "",
      email: "",
      address: "",
      district: "",
      gender: "",
      phone: "",
      foto: "",
    })
      .then((response) => {
        console.log("Berhasil memperbarui data:", response.data);
        onClose();
      })
      .catch((error) => {
        console.error("Gagal memperbarui data:", error);
      });
  };

  return (
    <>
      <Button onClick={onOpen} size="sm" colorScheme="orange">
        Update
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Eannoy</ModalHeader>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
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
        </ModalContent>
      </Modal>
    </>
  );
}
