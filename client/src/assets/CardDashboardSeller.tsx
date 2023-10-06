/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Box
} from '@chakra-ui/react';
import React from 'react';
import PerformanceChart from './PerformanceChart';
  
    
  interface CardDashboardSellerProps {
    // Props untuk sidebar seller, jika ada yang diperlukan
  }
  
  const CardDashboardSeller: React.FC<CardDashboardSellerProps> = () => {

  
    return (
      <Box mb={'20px'} border={'1px solid black'} borderRadius={'10px'} boxShadow={'1px 1px 6px 3px orange'}> 
        <Box>
            <PerformanceChart />
        </Box> 
      </Box>
    );
  };
  
  export default CardDashboardSeller;
  