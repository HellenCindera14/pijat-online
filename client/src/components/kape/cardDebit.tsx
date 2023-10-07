import { Box, Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

export default function CardDebit() {
  return (
    <>
      <Box w={"40%"}>
        <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"center"} py={3}>
          Kartu
        </Text>
        <Card bgColor={"teal.400"} color={"white"}>
          <CardHeader>
            <Heading size="sm">tealVirtual Card</Heading>
          </CardHeader>
          <CardBody>
            <Text>1234 4432 1093</Text>
            <Text>Rp. 200.000</Text>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
