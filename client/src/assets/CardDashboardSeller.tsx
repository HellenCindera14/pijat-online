/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Card } from "@chakra-ui/react";
import React from "react";
import PerformanceChart from "./PerformanceChart";

interface CardDashboardSellerProps {
  // Props untuk sidebar seller, jika ada yang diperlukan
}

const CardDashboardSeller: React.FC<CardDashboardSellerProps> = () => {
  return (
    // <Card>
    <Box>
      <PerformanceChart />
    </Box>
    // </Card>
  );
};

export default CardDashboardSeller;
