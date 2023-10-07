import { Button, Flex, Stack } from "@chakra-ui/react";
import { GoHome, GoPeople, GoSignOut } from "react-icons/go";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function SidebarAd() {
  return (
    <>
      <Flex direction={"column"} h={"100vh"} py={4} justifyContent={"space-between"}>
        <Stack px={4}>
          <Link to="/admin/dashboard">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <GoHome />
              Dashboard
            </Button>
          </Link>
          <Link to="/admin/cs">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <GoPeople />
              Customer
            </Button>
          </Link>
          <Link to="/admin/kape">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <GoPeople />
              Kang Pijat
            </Button>
          </Link>
          <Link to="/admin/complaint">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <RiCustomerService2Fill />
              Layanan Aduan
            </Button>
          </Link>
          {/* <Link to="https://wa.me/085742981987" target="_blank">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <GoCopilot />
              Support Service
            </Button>
          </Link> */}
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
