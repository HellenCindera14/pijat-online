import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import FormEditProfile from "../../components/admin/FormEditProfile";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";

export default function KpFormEdit() {
  return (
    <>
      <LayoutPageAd>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Edit Profile</Heading>
            </Box>
            <CardBody display={"flex"} gap={5} ps={6}>
              <FormEditProfile />
            </CardBody>
            {/* <CardFooter>
              <Button>Simpan</Button>
              <Button>Batal</Button>
            </CardFooter> */}
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
