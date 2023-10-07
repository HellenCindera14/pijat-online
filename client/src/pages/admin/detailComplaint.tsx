import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import CardComplaintDetail from "../../components/admin/CardComplaintDetail";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";

export default function DetailComplaint() {
  return (
    <>
      <LayoutPageAd>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Detail Aduan</Heading>
            </Box>
            <CardBody ps={6}>
              <CardComplaintDetail />
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
