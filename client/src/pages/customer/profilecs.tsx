import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import LayoutPage from "../../layouts/customer/LayoutPageCs";
import CardProfile from "../../components/customer/CardProfile";

export default function ProfileCS() {
  return (
    <>
      <LayoutPage>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Profile</Heading>
            </Box>
            <CardBody display={"flex"} gap={5} ps={6}>
              <CardProfile />
            </CardBody>
          </Card>
        </Stack>
      </LayoutPage>
    </>
  );
}
