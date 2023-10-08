import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import CardHistory from "../../components/customer/CardHistory";
import CardKretek from "../../components/customer/CardKretek";
import CardPijat from "../../components/customer/CardPijat";
import CardRefleksi from "../../components/customer/CardRefleksi";
import FormPengaduan from "../../components/kape/LayananAduan";
import LayoutPage from "../../layouts/customer/LayoutPageCs";
import { useInvoice } from "../../hooks/customer/useInvoice";

export default function Services() {
  const { invoiceHistory } = useInvoice();
  return (
    <>
      <LayoutPage>
        <Stack mt={"7.5vh"} spacing={4}>
          {/* Layanan */}
          <Card>
            <Box px={6} pt={6} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
              <Heading size="sm">Layanan</Heading>
              <FormPengaduan />
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
              {invoiceHistory.map((data) => (
                <CardHistory status={data.status} key={data.id} seller={data?.seller} user={data?.user} id={data.id} />
              ))}
            </CardBody>
          </Card>
        </Stack>
      </LayoutPage>
    </>
  );
}
