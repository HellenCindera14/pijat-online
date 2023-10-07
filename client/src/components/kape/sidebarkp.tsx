import { Button, Flex, Stack } from "@chakra-ui/react";
import { GoCopilot, GoGraph, GoHome, GoPeople, GoPerson, GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import ModalComplaint from "./ModalComplaint";
export default function SidebarKp() {
  return (
    <>
      <Flex direction={"column"} h={"100vh"} py={4} justifyContent={"space-between"}>
        <Stack px={4}>
          <Link to="/kape/dashboard">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <GoHome />
              Dashboard
            </Button>
          </Link>
          <Link to="/kape/performance">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <GoGraph />
              Performa
            </Button>
          </Link>
          {/* <Link to="/kape/complaint"> */}
          <Button gap={1} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
            <GoPeople />
            <ModalComplaint />
          </Button>
          {/* </Link> */}
          <Link to="/kape/profile">
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
