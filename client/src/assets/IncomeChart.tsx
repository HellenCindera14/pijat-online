import { Box, Button, Card, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";

export default function IncomeChart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  return (
    <>
      <Box p={10} borderWidth="1px" borderRadius="lg" textAlign={"center"}>
        {/* <Center>
          <Box mb={"20px"}>
            <Text fontSize={"20px"}>Penghasilan</Text>
          </Box>
        </Center> */}
        <SimpleGrid columns={3} spacing={4}>
          {months.map((month, index) => (
            <Card onClick={onOpen} key={index}>
              <Button variant={"ghost"} colorScheme="teal">
                {month}
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Income</ModalHeader>
          <ModalBody>
            <Text>ini dia</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
