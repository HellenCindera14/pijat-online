import { useState } from 'react';
import { ChakraProvider, Box, Button, Link, VStack, Heading, Img, Code } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState('');

  return (
    <ChakraProvider>
      <Box p={6}>
        <VStack align="center">
          <Link href="https://vitejs.dev" isExternal>
            <Img src={viteLogo} className="logo" alt="Vite logo" />
            <ExternalLinkIcon mx="2px" />
          </Link>
          <Link href="https://react.dev" isExternal>
            <Img src={reactLogo} className="logo" alt="React logo" />
            <ExternalLinkIcon mx="2px" />
          </Link>
        </VStack>
        <Heading as="h1" size="xl" textAlign="center">
          Vite + React with Chakra UI
        </Heading>
        <Box p={6} borderWidth={1} borderRadius="md" boxShadow="lg">
          <Button colorScheme="teal" onClick={() => setCount(count + 1)}>
            Increment Count
          </Button>
          <Box>
            Edit <Code>src/App.tsx</Code> and save to test HMR
          </Box>
          <Box>Count is {count}</Box>
        </Box>
        <Box className="read-the-docs">
          Click on the Vite and React logos to learn more
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
