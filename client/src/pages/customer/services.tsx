import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import CardKretek from "../../components/customer/CardKretek";
import CardPijat from "../../components/customer/CardPijat";
import CardRefleksi from "../../components/customer/CardRefleksi";
import CardHistory from "../../components/customer/CardHistory";
import LayoutPage from "../../layouts/customer/LayoutPageCs";

export default function Services() {
  return (
    <>
      <LayoutPage>
        <Stack mt={"7.5vh"} spacing={4}>
          {/* Layanan */}
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Layanan</Heading>
            </Box>
            <CardBody display={"flex"} gap={5} ps={6}>
              <CardPijat />
              <CardKretek />
              <CardRefleksi />
            </CardBody>
          </Card>

          {/* Riwayat */}
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Riwayat</Heading>
            </Box>
            <CardBody display={"flex"} gap={5} ps={6}>
              <CardHistory />
            </CardBody>
          </Card>
        </Stack>
      </LayoutPage>
    </>
  );
}
