import { Box, Button, Card, CardBody, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
export default function CardKangPijat() {
  return (
    <>
      <Box>
        <Box w={"275px"}>
          <Card>
            <CardBody gap={2} display={"flex"} flexDirection={"column"}>
              <Heading size="sm">Pijat dan Urut</Heading>
              <Link to={"/admin/pijat-urut"}>
                <Button colorScheme="teal">View here</Button>
              </Link>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </>
  );
}
