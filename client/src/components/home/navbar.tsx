import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box>
        <Flex gap={5}>
          <Link to="/">
            <Button variant={"ghost"} colorScheme="" color="white">
              Home
            </Button>
          </Link>
          {/* <Link to="/aboutus">
            <Button variant={"ghost"} colorScheme="" color="white">
              About Us
            </Button>
          </Link> */}
          <Link to="/services">
            <Button variant={"ghost"} colorScheme="" color="white">
              Services
            </Button>
          </Link>
          {/* <Link to="/register">
            <Button variant={"ghost"} colorScheme="" color="white">
              Register
            </Button>
          </Link>
          <Link to="/kangpijat">
            <Button variant={"ghost"} colorScheme="" color="white">
              Kang Pijat
            </Button>
          </Link> */}
        </Flex>
      </Box>
    </>
  );
}
