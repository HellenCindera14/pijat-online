import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import LayoutPageCs from "../../layouts/customer/LayoutPageCs";
import CardOftenKretek from "../../components/customer/CardOftenKretek";
import CardOftenPijat from "../../components/customer/CardOftenPijat";
import CardOftenRefleksi from "../../components/customer/CardOftenRefleksi";
import CardKHistory from "../../components/customer/CardHistory";
import { useInvoice } from "../../hooks/customer/useInvoice";

export default function DashboardCs() {
  const { invoiceHistory } = useInvoice();

  return (
    <>
      <LayoutPageCs>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Dashboard</Heading>
            </Box>
            <CardBody display={"flex"} gap={5} ps={6}>
              <CardOftenPijat />
              <CardOftenKretek />
              <CardOftenRefleksi />
            </CardBody>
            <Box ps={6} pt={6}>
              <Heading size="sm">Riwayat</Heading>
            </Box>
            <CardBody display={"flex"} gap={5} ps={6}>
              {invoiceHistory.map((data) => (
                <CardKHistory status={data.status} key={data.id} seller={data?.seller} user={data?.user} id={data.id} />
              ))}
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageCs>
    </>
  );
}
