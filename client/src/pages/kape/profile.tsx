import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import CardProfile from "../../components/customer/CardProfile";
import LayoutPageKp from "../../layouts/kape/LayoutPageKp";

export default function Profile() {
  return (
    <>
      <LayoutPageKp>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Profile</Heading>
            </Box>
            <CardBody ps={6}>
              <CardProfile />
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageKp>
    </>
  );
}
