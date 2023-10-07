import { Avatar, Box, Button, Card, CardHeader, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";
export default function CardComplaintDetail() {
  return (
    <>
      <Box>
        <Box gap={4} display={"flex"} flexDirection={"column"}>
          <Card>
            <CardHeader>
              <Box>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                  <Box>
                    <Heading size="sm">Segun Adebayo</Heading>
                    <Text>Pijet Urut</Text>
                  </Box>
                </Flex>
                <Box py={2}>
                  <Box py={2}>
                    <Heading size="sm">Ke pada: </Heading>
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap" py={1}>
                      <Avatar size={"sm"} name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                      <Box>
                        <Text>eannoy</Text>
                      </Box>
                    </Flex>
                  </Box>
                  <Box py={2}>
                    <Heading size="sm">Laporan</Heading>
                    <Text>Content</Text>
                  </Box>

                  <Box py={2} display={"flex"} alignItems={"center"} gap={10}>
                    <Checkbox size="lg" colorScheme="green" />
                    <Button size="sm" colorScheme="orange">
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Box>
            </CardHeader>
          </Card>
        </Box>
      </Box>
    </>
  );
}
