import { Box, Button, Card, CardBody, Center, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";

export default function CardOftenPijat() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Box w={"275px"}>
          <Card>
          <CardBody>
              <Box gap={2} display={"flex"} justifyContent={"space-between"}>
                <Heading size="sm">Pijat Traditional (Relaksasi) </Heading>
                <Heading size="sm">3X</Heading>
              </Box>
              <Center mt={'1em'}>
                <Box>
                  <Button size={'sm'} bg={'green.500'} color={'white'} onClick={onOpen}>
                    Invoice History
                  </Button>
                </Box>
              </Center>
            </CardBody>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Header</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>JANCOK</Text>
                </ModalBody>
                <ModalFooter>
                  <Button>Close</Button>
                  <Button>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Card>
        </Box>
      </Box>
    </>
  );
}
