import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import CardDashboardSeller from "../../assets/CardDashboardSeller";
import CardIncomeSeller from "../../assets/CardIncomeSeller";
import CardTransaksi from "../../components/admin/CardTransaksi";
import CardDebit from "../../components/kape/CardDebit";
import CardTopUp from "../../components/kape/CardTopUp";
import LayoutPageKp from "../../layouts/kape/LayoutPageKp";

export default function Dashboardkp() {
  return (
    <>
      <LayoutPageKp>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Dashboard</Heading>
            </Box>
            <CardBody display={"flex"} justifyContent={"space-evenly"} ps={6}>
              <CardDebit />
              <CardTopUp />
            </CardBody>
            <Box ps={6} pt={6}>
              <Heading size="sm">Transaksi</Heading>
            </Box>
            <CardBody gap={5} ps={6}>
              <CardTransaksi />
            </CardBody>
            <Box ps={6} pt={6}>
              <Heading size="sm">Performa</Heading>
            </Box>
            <CardBody gap={5} ps={6}>
              <CardDashboardSeller />
            </CardBody>
            <Box ps={6} pt={6}>
              <Heading size="sm">Income</Heading>
            </Box>
            <CardBody gap={5} ps={6}>
              <CardIncomeSeller />
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageKp>
    </>
  );
}
