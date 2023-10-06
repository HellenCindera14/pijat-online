import { Stack } from "@chakra-ui/react";
import CardDashboardSeller from "../../assets/CardDashboardSeller";
import CardIncomeSeller from "../../assets/CardIncomeSeller";
import LayoutPageKp from "../../layouts/kape/LayoutPageKp";

export default function Dashboardkp() {
  return (
    <>
      <LayoutPageKp>
        <Stack mt={"7.5vh"} spacing={4}>
          <CardDashboardSeller />
          <CardIncomeSeller />
        </Stack>
      </LayoutPageKp>
    </>
  );
}
