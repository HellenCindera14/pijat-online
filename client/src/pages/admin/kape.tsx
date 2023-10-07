import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";
import CardKangPijit from "../../components/admin/CardKangPijat";
import CardKangKretek from "../../components/admin/CardKangKretek";
import CardKangRefleksi from "../../components/admin/CardKangRefleksi";

export default function Kape() {
  return (
    <>
      <LayoutPageAd>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Kang Pijat</Heading>
            </Box>
            <CardBody display={"flex"} gap={5} ps={6}>
              <CardKangPijit />
              <CardKangKretek />
              <CardKangRefleksi />
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
