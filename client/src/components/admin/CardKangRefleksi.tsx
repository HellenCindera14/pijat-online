import { Box, Button, Card, CardBody, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CardKangRefleksi() {
  return (
    <>
      <Box>
        <Box w={"275px"}>
          <Card>
            <CardBody gap={2} display={"flex"} flexDirection={"column"}>
              <Heading size="sm">Pijat Refleksi</Heading>
              <Link to={"/admin/pijat-refleksi"}>
                <Button colorScheme="teal">View here</Button>
              </Link>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </>
  );
}
