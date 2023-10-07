import { Avatar, Box, Button, Card, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function CardPijat() {
  return (
    <>
      <Box>
        <Box gap={4} display={"flex"} flexDirection={"column"}>
          <Card>
            <CardHeader>
              <Flex alignItems={"center"}>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                  <Box>
                    <Heading size="sm">Segun Adebayo</Heading>
                    <Text>segun@goservice.com</Text>
                  </Box>
                </Flex>
                <Box display={"flex"} gap={2}>
                  <Button size="sm" colorScheme="orange">
                    Action
                  </Button>
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
