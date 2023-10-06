import {
  Box,
  Button,
  Flex,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  FiBarChart2,
  FiHome,
  FiSettings,
  FiShoppingBag
} from "react-icons/fi";

interface SidebarSellerProps {
  // Props untuk sidebar seller, jika ada yang diperlukan
}

const SidebarSeller: React.FC<SidebarSellerProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={'5em'}
      display={{ base: 'none', md: 'block' }}
    >
      <Flex direction="column" h="100vh" alignItems="center" justify="space-between">
        <Stack spacing={6} mt={10} align="center">
          <Link href='/home'>
            <Img as={FiHome} boxSize={6} />
          </Link>
          <Link>
            <Img as={FiShoppingBag} boxSize={6} />
          </Link>
          <Link>
            <Img as={FiBarChart2} boxSize={6} />
          </Link>
          <Link>
            <Img as={FiSettings} boxSize={6} />
          </Link>
        </Stack>
        <Flex direction="column" align="center">
      <Button onClick={handleToggle}>
        <Link>
        <Text>LOG-OUT</Text>
        </Link>
      </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SidebarSeller;
