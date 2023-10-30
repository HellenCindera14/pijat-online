import { Avatar, Box, Button, Flex, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { ReactNode } from "react";
import SidebarKp from "../../components/kape/sidebarkp";
import { usePijetUrut } from "../../hooks/kape/usePijetUrut";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutPageKp({ children }: LayoutProps) {
  const { handleChangeUpdateIsOpened, handleUpdate } = usePijetUrut();

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
          <Box display="flex" alignItems="center" gap={5}>
            <form>
              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Aktifikasi Web?</FormLabel>
                {/* <input type="hidden" name="id" value={kape.id} /> */}
                <Button variant={"link"} onClick={handleUpdate}>
                  <Switch name="isOpened" onChange={handleChangeUpdateIsOpened} />
                </Button>
              </FormControl>
            </form>
            <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </Box>
        </Box>
        <Flex justify={"center"} minHeight={"100vh"}>
          <Box w={"25%"} top={"7.5vh"} position={"fixed"} left={0} h={"100vh"} bgColor={"white"}>
            <SidebarKp />
          </Box>
          <Box w={"75%"} p={5} bgColor={"whitesmoke"} pos="absolute" left={"25%"}>
            {children}
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
