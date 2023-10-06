import { Box, Button, Card, CardBody, Heading } from "@chakra-ui/react";
export default function CardRefleksi() {
  return (
    <>
      <Box>
        <Box w={"275px"}>
          <Card>
            <CardBody gap={2} display={"flex"} flexDirection={"column"}>
              <Heading size="sm">Pijat Refleksi</Heading>
              {/* <Text>Pijat refleksi adalah teknik pijat yang fokus pada titik-titik tertentu di kaki dan tangan untuk merangsang keseimbangan tubuh dan kesejahteraan.</Text> */}
              <Button colorScheme="teal">View here</Button>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </>
  );
}
