// import {
//   Box,
//   Button,
//   Center,
//   Flex,
//   Img,
//   Link,
//   Stack,
//   Text,
//   useColorModeValue
// } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import {
//   FiHome
// } from "react-icons/fi";

// import { FcComboChart, FcCustomerSupport, FcServices } from "react-icons/fc";

// interface SidebarSellerProps {
//   // Props untuk sidebar seller, jika ada yang diperlukan
// }

// const SidebarSeller: React.FC<SidebarSellerProps> = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Box
//       bg={useColorModeValue('white', 'gray.800')}
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={'7em'}
//       display={{ base: 'none', md: 'block' }}
//     >
//       <Flex direction="column" h="100vh" alignItems="center" justify="space-between">
//         <Stack spacing={6} align="center" textAlign={'center'}>
//           <Link href='/Seller/DashBoard'>
//             <Center>
//               <Img as={FiHome} boxSize={6} />
//             </Center>
//             <Text> DashBoard </Text>
//           </Link>
//           <Link href='/Seller/Performance'>
//             <Center>
//               <Img as={FcComboChart} boxSize={6} />
//             </Center>
//             <Text> Performa </Text>
//           </Link>
//           <Link href='/Seller/Complaint'>
//             <Center>
//               <Img as={FcServices} boxSize={6} />
//             </Center>
//             <Text> Layanan Bantuan </Text>
//           </Link>
//           <Link href='/Seller/Support'>
//             <Center>
//               <Img as={FcCustomerSupport} boxSize={6} />
//             </Center>
//             <Text> Support Service </Text>
//           </Link>
//         </Stack>
//         <Flex direction="column" align="center">
//       <Button onClick={handleToggle}>
//         <Box mb={'3em'} border={'1px solid black'} boxShadow={'1px 1px 6px 2px orange'} padding={'4px 10px 4px 10px'} borderRadius={'10px'}>
//           <Link>
//             <Text>LOG-OUT</Text>
//           </Link>
//         </Box>
//       </Button>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };

// export default SidebarSeller;
