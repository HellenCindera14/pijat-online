import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import CardComplaint from "../../components/admin/CardComplaint";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";

export default function CompaintAd() {
  return (
    <>
      <LayoutPageAd>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Layanan Aduan</Heading>
            </Box>
            <CardBody display={"flex"} justifyContent={"space-between"} ps={6}>
              <Box w={"45%"}>
                <Heading size="sm" pb={2}>
                  Kang Pijat
                </Heading>
                <CardComplaint />
              </Box>
              <Box w={"45%"}>
                <Heading size="sm" pb={2}>
                  Customer
                </Heading>
                <CardComplaint />
              </Box>
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
