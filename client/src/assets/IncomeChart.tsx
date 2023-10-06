import { Box, Button, Center, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";

export default function IncomeChart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  return (
    <>
      <Box p={4} borderWidth="1px" borderRadius="lg" textAlign={"center"}>
        <Center>
          <Box width={"250px"} border={"1px solid black"} borderRadius={"13px"} boxShadow={"2px 3px 4px 1px green"} mb={"20px"}>
            <Text fontSize={"30px"} fontStyle={"italic"}>
              Penghasilan
            </Text>
          </Box>
        </Center>
        <SimpleGrid columns={3} spacing={4}>
          {months.map((month, index) => (
            <Button onClick={onOpen} key={index} border="1px solid black" borderRadius="10px" boxShadow="1px 2px 6px 4px green">
              {month}
            </Button>
          ))}
        </SimpleGrid>
      </Box>

      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Judulnya Cooegggg</ModalHeader>
          <ModalBody>
            <Text>Jancok</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
