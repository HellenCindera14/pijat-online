/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Box
} from '@chakra-ui/react';
import React from 'react';
import IncomeChart from './IncomeChart';
  
    
  interface CardIncomeSellerProps {
    // Props untuk sidebar seller, jika ada yang diperlukan
  }
  
  const CardIncomeSeller: React.FC<CardIncomeSellerProps> = () => {

  
    return (
      <Box border={'1px solid black'} borderRadius={'10px'} boxShadow={'1px 1px 6px 3px orange'}> 
        <Box>
            <IncomeChart />
        </Box> 
      </Box>
    );
  };
  
  export default CardIncomeSeller;
  