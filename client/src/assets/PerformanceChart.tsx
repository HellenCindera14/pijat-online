import { Box, Flex, Progress, Text } from "@chakra-ui/react";

export default function PerformanceChart() {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Flex alignItems="center" mb={4}>
        <Text mr={2}>Task A:</Text>
        <Progress flex="1" size="sm" colorScheme="green" value={70} />
      </Flex>
      <Flex alignItems="center" mb={4}>
        <Text mr={2}>Task B:</Text>
        <Progress flex="1" size="sm" colorScheme="blue" value={50} />
      </Flex>
      <Flex alignItems="center">
        <Text mr={2}>Task C:</Text>
        <Progress flex="1" size="sm" colorScheme="purple" value={90} />
      </Flex>
    </Box>
  );
}
