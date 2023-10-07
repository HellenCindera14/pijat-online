import { Button, Flex, Stack } from "@chakra-ui/react";
import { GoCopilot, GoHome, GoPerson, GoSignOut, GoStack } from "react-icons/go";
import { Link } from "react-router-dom";
export default function SidebarCs() {
  return (
    <>
      <Flex direction={"column"} h={"100vh"} py={4} justifyContent={"space-between"}>
        <Stack px={4}>
          <Link to="/cs/dashboard">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <GoHome />
              Dashboard
            </Button>
          </Link>
          <Link to="/cs/services">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <GoStack />
              Layanan
            </Button>
          </Link>
          <Link to="/cs/profile">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <GoPerson />
              Profile
            </Button>
          </Link>
          <Link to="https://wa.me/085742981987" target="_blank">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <GoCopilot />
              Support Service
            </Button>
          </Link>
        </Stack>
        <Stack px={4} pb={"7.5vh"}>
          <Link to="/">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <GoSignOut />
              Logout
            </Button>
          </Link>
        </Stack>
      </Flex>
    </>
  );
}
