import { Box, Card, CardBody, FormControl, Heading, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import CardPijat from "../../components/admin/CardPijat";
import { useSeller } from "../../hooks/admin/useSeller";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";

export default function Kape() {
  const [query, setQuery] = useState("");

  const { sellerMale, sellerFemale } = useSeller(query);
  return (
    <>
      <LayoutPageAd>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box px={6} pt={6} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Heading size="sm">Kang Pijat</Heading>
              <FormControl w={"48%"} display={"flex"} gap={2}>
                <Input type="text" placeholder="Cari Kang Pijat" value={query} onChange={(e) => setQuery(e.target.value)} />
              </FormControl>
            </Box>
            <CardBody display={"flex"} gap={5}>
              <Box w={"50%"}>
                <Heading size="sm" pb={2}>
                  Laki - Laki
                </Heading>
                {sellerMale.map((data) => (
                  <CardPijat key={data.id} id={data.id} phone={data.phone} image={data.image} name={data.name} gender={data.gender} email={data.email} district={data.district} address={data.address} />
                ))}
              </Box>
              <Box w={"50%"}>
                <Heading size="sm" pb={2}>
                  Perempuan
                </Heading>
                {sellerFemale.map((data) => (
                  <CardPijat key={data.id} id={data.id} phone={data.phone} image={data.image} name={data.name} gender={data.gender} email={data.email} district={data.district} address={data.address} />
                ))}
              </Box>
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
