import { Avatar, Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import SidebarCs from "../../components/customer/sidebarcs";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutPageCs({ children }: LayoutProps) {
  return (
    <>
      <Flex justify={"center"} minHeight={"100vh"} direction={"column"}>
        <Box
          width={"100%"}
          height={"7.5vh"}
          position={"fixed"}
          top={0}
          borderBottom={"1px"}
          borderBottomColor={"gray.200"}
          backgroundColor={"white"}
          zIndex={10}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={10}
        >
          <Box>{""}</Box>
          <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Box>
        <Flex justify={"center"} minHeight={"100vh"}>
          <Box w={"25%"} top={"7.5vh"} position={"fixed"} left={0} h={"100vh"} bgColor={"white"}>
            <SidebarCs />
          </Box>
          <Box w={"75%"} p={5} bgColor={"whitesmoke"} pos="absolute" left={"25%"} h={"100vh"}>
            {children}
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
