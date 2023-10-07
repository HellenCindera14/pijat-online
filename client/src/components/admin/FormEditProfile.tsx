import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function FormEditProfile() {
  return (
    <>
      <Box>
        <FormControl pb={3}>
          <FormLabel>Nama</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl pb={3}>
          <FormLabel>Jenis Kelamain</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl pb={3}>
          <FormLabel>E-mail</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl pb={3}>
          <FormLabel>No. Hp</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl pb={3}>
          <FormLabel>Alamat</FormLabel>
          <Input type="text" />
        </FormControl>
        <Box w={"400px"}>
          <Button w={"400px"}>Edit</Button>
        </Box>
      </Box>
    </>
  );
}
