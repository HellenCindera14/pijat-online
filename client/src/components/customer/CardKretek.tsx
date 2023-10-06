import { Box, Button, Card, CardBody, Heading } from "@chakra-ui/react";
export default function CardKretek() {
  return (
    <>
      <Box>
        <Box w={"275px"}>
          <Card>
            <CardBody gap={2} display={"flex"} flexDirection={"column"}>
              <Heading size="sm">Pijat Kretek</Heading>
              {/* <Text>Pijat kretek adalah pengobatan alternatif untuk mengatasi masalah pada tulang, otot, dan persendian</Text> */}
              <Button colorScheme="teal">View here</Button>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </>
  );
}
