import { Box, Button, Card, CardBody, FormControl, Heading, Input, Stack } from "@chakra-ui/react";
import CardRefleksi from "../../components/admin/CardRefleksi";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";

export default function KpPijatRefleksi() {
  return (
    <>
      <LayoutPageAd>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box px={6} pt={6} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Heading size="sm">Pijat Refleksi</Heading>
              <FormControl w={"48%"} display={"flex"} gap={2}>
                <Input type="text" placeholder="Cari Kang Refleksi" />
                <Button colorScheme="teal">Search</Button>
              </FormControl>
            </Box>
            <CardBody display={"flex"} gap={5}>
              <Box w={"50%"}>
                <Heading size="sm" pb={2}>
                  Laki - Laki
                </Heading>
                <CardRefleksi />
              </Box>
              <Box w={"50%"}>
                <Heading size="sm" pb={2}>
                  Perempuan
                </Heading>
                <CardRefleksi />
              </Box>
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
