import { Avatar, Box, Button, Card, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import ModalAction from "./ModalAction";
import { ICustomer } from "../../interfaces/admin/ICustomer"

export default function CardCustomer(props: ICustomer) {
  return (
    <>
      <Box>
        <Box gap={4} display={"flex"} flexDirection={"column"}>
          <Card>
            <CardHeader>
              <Flex alignItems={"center"}>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={props.name} src="https://bit.ly/sage-adebayo" />
                  <Box>
                    <Heading size="sm">{props.name}</Heading>
                    <Text>{props.email}</Text>
                  </Box>
                </Flex>
                <Box display={"flex"} gap={2}>
                  <ModalAction />
                  <Button size="sm" colorScheme="red">
                    Delete
                  </Button>
                </Box>
              </Flex>
            </CardHeader>
          </Card>
        </Box>
      </Box>
    </>
  );
}
