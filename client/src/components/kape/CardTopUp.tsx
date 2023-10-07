import { Box, Card, CardBody, FormControl, FormHelperText, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";

export default function CardTopUp() {
  return (
    <>
      <Box w={"40%"}>
        <Text fontSize={"lg"} fontWeight={"bold"}>
          Top Up
        </Text>
        <Card bgColor={"teal.400"} color={"white"}>
          <CardBody>
            <FormControl>
              <FormLabel>Jumlah Nominal</FormLabel>
              <Input type="number" size={"10px"} />
            </FormControl>
            <FormControl>
              <FormLabel>Bukti Top Up</FormLabel>
              <Input type="file" size={"10px"} />
              <FormHelperText>Top Up Ke BCA No. Rek 9827459204875924</FormHelperText>
            </FormControl>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
