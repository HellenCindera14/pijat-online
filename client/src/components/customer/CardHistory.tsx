import { Avatar, Box, Card, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import { GoStarFill } from "react-icons/go";
import { IInvoiceHistory } from "../../interfaces/customer/IInvoice";
export default function CardKHistory(props: IInvoiceHistory) {
  return (
    <>
      <Box>
        <Box w={"750px"} gap={4} display={"flex"} flexDirection={"column"}>
          <Card>
            <CardHeader>
              <Flex>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={props.seller?.name} src="https://bit.ly/sage-adebayo" />
                  <Box>
                    <Heading size="sm">{props.seller?.name}</Heading>
                    <Text>Pijet Urut</Text>
                  </Box>
                </Flex>
                <Box>
                  <Flex alignItems={"center"} gap="3">
                    <GoStarFill color="gold" size={20} />
                    <Text>4</Text>
                  </Flex>
                  <Text>10:00 AM</Text>
                </Box>
              </Flex>
            </CardHeader>
          </Card>
        </Box>
      </Box>
    </>
  );
}
