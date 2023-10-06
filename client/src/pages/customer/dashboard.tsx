import { Stack, Text } from "@chakra-ui/react";
import LayoutPage from "../../layouts/customer/LayoutPageCs";

export default function Dashboard() {
  return (
    <>
      <LayoutPage>
        <Stack mt={"7.5vh"} spacing={4}>
          <Text>this page Dashboard</Text>
        </Stack>
      </LayoutPage>
    </>
  );
}
