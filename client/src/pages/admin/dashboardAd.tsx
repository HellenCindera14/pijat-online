import { Box, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import CardIncomeSeller from "../../assets/CardIncomeSeller";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";

export default function DashboardAd() {
  return (
    <>
      <LayoutPageAd>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Dashboard</Heading>
            </Box>
            <CardBody ps={6}>
              <Box py={2}>
                <Heading size="sm">Invoise Hari ini</Heading>
              </Box>
              <Card w={"25%"} bgColor={"teal.400"} color={"white"}>
                <CardBody>
                  <Text fontWeight={"bold"}>Rp 100.000</Text>
                </CardBody>
              </Card>
              {/* <CardIncomeSeller /> */}
            </CardBody>
            <CardBody ps={6}>
              <Box py={2}>
                <Heading size="sm">Invoices</Heading>
              </Box>
              <CardIncomeSeller />
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
