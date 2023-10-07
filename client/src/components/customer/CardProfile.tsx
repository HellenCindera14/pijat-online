import { Box, Button, FormControl, FormLabel, Image, Input } from "@chakra-ui/react";

export default function CardProfile() {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={10} mx={"16"}>
        <Box>
          <Image
            boxSize="300px"
            borderRadius="full"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          />
        </Box>
        <Box w={"400px"}>
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
      </Box>
    </>
  );
}
