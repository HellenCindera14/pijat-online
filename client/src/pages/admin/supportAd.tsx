import { Box, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";

export default function SupportAd() {
  return (
    <>
      <LayoutPageAd>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Support Services</Heading>
            </Box>
            <CardBody display={"flex"} gap={5} ps={6}>
              <Text>This Page Support Services</Text>
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
