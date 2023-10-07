import { Box, Button, Card, CardBody, FormControl, Heading, Input, Stack } from "@chakra-ui/react";
import CardKretek from "../../components/admin/CardKretek";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";

export default function KpPijatKretek() {
  return (
    <>
      <LayoutPageAd>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box px={6} pt={6} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Heading size="sm">Pijat Kretek</Heading>
              <FormControl w={"48%"} display={"flex"} gap={2}>
                <Input type="text" placeholder="Cari Kang Kretek" />
                <Button colorScheme="teal">Search</Button>
              </FormControl>
            </Box>
            <CardBody display={"flex"} gap={5}>
              <Box w={"50%"}>
                <Heading size="sm" pb={2}>
                  Laki - Laki
                </Heading>
                <CardKretek />
              </Box>
              <Box w={"50%"}>
                <Heading size="sm" pb={2}>
                  Perempuan
                </Heading>
                <CardKretek />
              </Box>
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
