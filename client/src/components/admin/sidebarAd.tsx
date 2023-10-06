import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Button, Flex, Stack } from "@chakra-ui/react";
import { GoCopilot, GoHome, GoPeople, GoSignOut } from "react-icons/go";
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
          {/* <Link to="/admin/kape"> */}
          <Accordion defaultIndex={[0]} allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
                  <GoPeople />
                  Kang Pijat
                </Button>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* </Link> */}
          <Link to="/admin/complaint">
            <Button gap={5} justifyContent={"left"} w={"45vh"} h={"8vh"} ps={10} variant="ghost" colorScheme="teal" color={"black"}>
              <RiCustomerService2Fill />
              Layanan Aduan
            </Button>
          </Link>
          <Link to="/admin/support">
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
