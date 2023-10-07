import { Box, Button, Card, CardBody, FormControl, Heading, Input, Stack } from "@chakra-ui/react";
import CardCustomer from "../../components/admin/CardCustomer";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";
import { useCustomers } from "../../hooks/admin/useCustomers"

export default function Customer() {
  const { customerFemale, customerMale } = useCustomers()
  return (
    <>
      <LayoutPageAd>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box px={6} pt={6} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Heading size="sm">Customer</Heading>
              <FormControl w={"48%"} display={"flex"} gap={2}>
                <Input type="text" placeholder="Cari Customer" />
                <Button colorScheme="teal">Search</Button>
              </FormControl>
            </Box>
            <CardBody display={"flex"} gap={5} ps={6}>
              <Box w={"50%"}>
                <Heading size="sm" pb={2}>
                  Laki - Laki
                </Heading>
                {customerMale.map((data) => (
                  <CardCustomer key={data.id} address={data.address} email={data.email} gender={data.gender} id={data.id} image={data.image} name={data.name} phone={data.phone} />
                ))}
              </Box>
              <Box w={"50%"}>
                <Heading size="sm" pb={2}>
                  Perempuan
                </Heading>
                {customerFemale.map((data) => (
                  <CardCustomer key={data.id} address={data.address} email={data.email} gender={data.gender} id={data.id} image={data.image} name={data.name} phone={data.phone} />
                ))}
              </Box>
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
