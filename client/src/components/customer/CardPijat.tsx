import { Box, Button, Card, CardBody, Heading } from "@chakra-ui/react";
export default function CardPijat() {
  return (
    <>
      <Box>
        <Box w={"275px"}>
          <Card>
            <CardBody gap={2} display={"flex"} flexDirection={"column"}>
              <Heading size="sm">Pijat dan Urut</Heading>
              {/* <Text>Pijat dan urut adalah teknik yang digunakan untuk meredakan ketegangan otot dan meningkatkan relaksasi tubuh.</Text> */}
              <Button colorScheme="teal">View here</Button>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </>
  );
}
