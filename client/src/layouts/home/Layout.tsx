import { Box, Button, Image } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Navbar from "../../components/home/navbar";

interface LayoutHome {
  children: ReactNode;
}

export default function Layout({ children }: LayoutHome) {
  return (
    <>
      <Box>
        <Box width={"100%"} height={"8vh"} position={"fixed"} top={0} borderBottom={"1px"} borderBottomColor={"gray.200"} backgroundColor={"teal"} zIndex={10} display={"flex"} alignItems={"center"} justifyContent={"space-between"} px={10}>
          <Link to="/">
            <Button variant={"ghost"} colorScheme="">
              <Image src={logo} boxSize="30px" />
            </Button>
          </Link>
          <Navbar />
        </Box>
        {children}
      </Box>
    </>
  );
}
