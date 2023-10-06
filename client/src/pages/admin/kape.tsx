import { Box, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";

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
              <Text>This Page Kang Pijat</Text>
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
