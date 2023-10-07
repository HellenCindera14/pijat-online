/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@chakra-ui/react";
import React from "react";
import IncomeChart from "./IncomeChart";

interface CardIncomeSellerProps {
  // Props untuk sidebar seller, jika ada yang diperlukan
}

const CardIncomeSeller: React.FC<CardIncomeSellerProps> = () => {
  return (
    <Box>
      <IncomeChart />
    </Box>
  );
};

export default CardIncomeSeller;
