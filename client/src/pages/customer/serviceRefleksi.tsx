import { Box, Card, CardBody, FormControl, Heading, Input, Stack } from "@chakra-ui/react";
import LayoutPage from "../../layouts/customer/LayoutPageCs";
import CardKangPijat from "../../components/customer/CardKangPijat";
import { usePijetUrut } from "../../hooks/customer/usePijetUrut";
import { useState } from "react";

export default function ServiceRefleksi() {
  const [query, setQuery] = useState("");

  const { pijetUrutLaki, pijetUrutWanita } = usePijetUrut(query);

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
                <Input type="text" placeholder="Cari Lokasi Kecamatan" value={query} onChange={(e) => setQuery(e.target.value)} />
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
                {pijetUrutLaki.map((data) => (
                  <CardKangPijat key={data.id} id={data.id} phone={data.phone} image={data.image} name={data.name} gender={data.gender} email={data.email} district={data.district} address={data.address} />
                ))}
              </Box>
              <Box w={"50%"} ps={6}>
                <Heading size="sm" pb={2}>
                  Perempuan
                </Heading>
                {pijetUrutWanita.map((data) => (
                  <CardKangPijat key={data.id} id={data.id} phone={data.phone} image={data.image} name={data.name} gender={data.gender} email={data.email} district={data.district} address={data.address} />
                ))}
              </Box>
            </CardBody>
          </Card>
        </Stack>
      </LayoutPage>
    </>
  );
}
