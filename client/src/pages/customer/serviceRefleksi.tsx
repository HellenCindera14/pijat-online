import { Box, Card, CardBody, FormControl, Heading, Input, Stack } from "@chakra-ui/react";
import LayoutPage from "../../layouts/customer/LayoutPageCs";
import CardKangPijat from "../../components/customer/CardKangPijat";

export default function ServiceRefleksi() {
  return (
    <>
      <LayoutPage>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Pijat Refleksi</Heading>
            </Box>
            <CardBody>
              <FormControl pb={3}>
                {/* <FormLabel>Nama</FormLabel> */}
                <Input type="text" placeholder="Cari Lokasi Kecamatan" />
              </FormControl>
            </CardBody>
          </Card>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Kang Pijat Refleksi</Heading>
            </Box>
            <CardBody display={"flex"} gap={5}>
              <Box w={"50%"} ps={6}>
                <Heading size="sm" pb={2}>
                  Laki - Laki
                </Heading>
                <CardKangPijat />
              </Box>
              <Box w={"50%"} ps={6}>
                <Heading size="sm" pb={2}>
                  Perempuan
                </Heading>
                <CardKangPijat />
              </Box>
            </CardBody>
          </Card>
        </Stack>
      </LayoutPage>
    </>
  );
}
