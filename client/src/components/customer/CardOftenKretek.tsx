import { Box, Button, Card, CardBody, Center, Heading } from "@chakra-ui/react";
export default function CardOftenKretek() {
  return (
    <>
      <Box>
        <Box w={"275px"}>
          <Card>
          <CardBody>
              <Box gap={2} display={"flex"} justifyContent={"space-between"}>
                <Heading size="sm">Pijat Kretek</Heading>
                <Heading size="sm">3X</Heading>
              </Box>
              <Center mt={'1em'}>
                <Box>
                  <Button size={'sm'} bg={'green.500'} color={'white'}>
                    Invoice History
                  </Button>
                </Box>
              </Center>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </>
  );
}
