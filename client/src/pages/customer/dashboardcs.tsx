import { Stack, Text } from "@chakra-ui/react";
import LayoutPageCs from "../../layouts/customer/LayoutPageCs";
import CardIncomeSeller from "../../assets/CardIncomeSeller";

export default function DashboardCs() {
  return (
    <>
      <LayoutPageCs>
        <Stack mt={"7.5vh"} spacing={4}>
          <Text>this page Dashboard</Text>
          <CardIncomeSeller />
        </Stack>
      </LayoutPageCs>
    </>
  );
}
