import { Box, Card, CardBody, CardHeader, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { GoClock, GoCodeOfConduct, GoFileZip, GoGlobe, GoLocation, GoPerson } from "react-icons/go";
import pijat from "../assets/images/pijat.jpg";
import Footer from "../components/home/Footer";
import Layout from "../layouts/home/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Stack mt={"8vh"}>
          <Flex px="20vh" py="10vh">
            <Flex flexDirection={"column"} justify={"center"} w="75vh" gap="5">
              <Text fontSize={"35px"} fontWeight={"bold"} lineHeight={1}>
                Jasa Pijat Panggilan Terpercaya dan Profesional
              </Text>
              <Divider borderWidth="2px" borderColor={"teal"} w={"10vh"} />
              <Text>
                Terlalu sibuk untuk pergi ke tukang pijat namun badan benar-benar butuh dipijat? Untuk masalah ini, solusinya adalah menggunakan jasa pijat panggilan. Pijat-Online.id menyediakan layananpijatyang bisa datang ke rumah Anda di
                manapun dan kapanpun juga selama 24 jam penuh.
              </Text>
            </Flex>
            <Box w="150vh">
              <Image src={pijat} alt="massage" />
            </Box>
          </Flex>
          <Box display={"flex"} alignItems={"center"} flexDirection={"column"} px={"20vh"} py={"10vh"} bgColor={"teal.400"} color={"white"}>
            <Flex flexDirection={"column"} justify={"center"} alignItems={"center"} w={"125vh"} gap={3} mt={5}>
              <Text fontSize={"25px"} fontWeight={"bold"}>
                Layanan Pijat Online
              </Text>
              <Text textAlign="center">
                Relaksasi dan perawatan tubuh melalui sesi pijat-onlin yang mendatangkan tukang pijat yang berpengalaman melalui platform digital. Anda tidak perlu pergi ke pusat spa atau klinik pijat fisik karena Anda dapat mengaksesnya
                dari kenyamanan rumah Anda. Di layanan ini, Anda akan mendapatkan akses ke terapis pijat berlisensi yang memiliki keahlian dalam berbagai teknik pijat.
              </Text>
            </Flex>
            <Flex gap={5} mt={"5vh"}>
              <Box w={"55vh"} bgColor={"teal.400"} color={"white"}>
                <Box>
                  <Heading size="md" textAlign="center">
                    Pijat Refleksi
                  </Heading>
                </Box>
                <Box mt={5}>
                  <Text textAlign="center">
                    Teknik pijat yang fokus pada titik-titik tertentu di kaki, tangan, dan telinga yang dipercayai terhubung dengan berbagai bagian tubuh. Layanan ini memberikan pengalaman relaksasi dan membantu meningkatkan sirkulasi darah
                    serta kesejahteraan fisik Anda.
                  </Text>
                </Box>
              </Box>
              <Box w={"55vh"} bgColor={"teal.400"} color={"white"}>
                <Box>
                  <Heading size="md" textAlign="center">
                    Pijat Relaksasi
                  </Heading>
                </Box>
                <Box mt={5}>
                  <Text textAlign="center">
                    Cara sempurna untuk mengurangi stres dan ketegangan otot setelah hari yang melelahkan. Layanan ini menawarkan teknik-teknik pijat yang lembut dan menenangkan untuk meredakan stres, meningkatkan relaksasi, dan memulihkan
                    energi Anda.
                  </Text>
                </Box>
              </Box>
              <Box w={"55vh"} bgColor={"teal.400"} color={"white"}>
                <Box>
                  <Heading size="md" textAlign="center">
                    Pijat Kretek
                  </Heading>
                </Box>
                <Box mt={5}>
                  <Text textAlign="center">
                    Pendekatan perawatan kesehatan alternatif yang berfokus pada sistem muskuloskeletal, terutama tulang belakang. Dalam sesi chiropractic, seorang dokter chiropractic yang terlatih akan melakukan penyesuaian tulang belakang
                    dan sendi dengan menggunakan tekanan lembut atau manipulasi.
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box display={"flex"} alignItems={"center"} flexDirection={"column"} px={"20vh"} py={"10vh"}>
            <Flex flexDirection={"column"} justify={"center"} alignItems={"center"} w={"125vh"} gap={3}>
              <Text fontSize={"25px"} fontWeight={"bold"}>
                Kelebihan Pijat Online
              </Text>
              <Text textAlign="center">
                Sebagai salah satu jasa pijat-online terbaik, Pijat-Online.id memiliki berbagai kelebihan dibandingkan dengan tempat lain. Kelebihan ini bisa Anda jadikan referensi dalam memilih jasa pijat untuk dipanggil ke rumah. Silahkan
                perhatikan dibawah ini.
              </Text>
            </Flex>
            <Flex gap={5} mt={"5vh"}>
              <Card w={"55vh"}>
                <CardHeader display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={3} mt={5}>
                  <GoGlobe size="50px" color="teal" />
                  <Heading size="md" textAlign="center">
                    Jaringan Luas
                  </Heading>
                </CardHeader>
                <CardBody mt={5}>
                  <Text textAlign="center">Di manapun Anda berada, layanan Pijat-Online.id selalu tersedia. Layanan kami meliputi kota-kota di Indonesia mulai dari Sabang sampai Merauke</Text>
                </CardBody>
              </Card>
              <Card w={"55vh"}>
                <CardHeader display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={3} mt={5}>
                  <GoClock size="50px" color="teal" />
                  <Heading size="md" textAlign="center">
                    Tersedia 24 Jam
                  </Heading>
                </CardHeader>
                <CardBody mt={5}>
                  <Text textAlign="center">Waktu tidak menghalangi kami memberikan layanan terbaik. Layanan pijat panggilan kami tersedia selama 24 jam penuh</Text>
                </CardBody>
              </Card>
              <Card w={"55vh"}>
                <CardHeader display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={3} mt={5}>
                  <GoLocation size="50px" color="teal" />
                  <Heading size="md" textAlign="center">
                    Bisa Melayani Dimana Saja
                  </Heading>
                </CardHeader>
                <CardBody mt={5}>
                  <Text textAlign="center">
                    Layanan pijat kami bisa melayani Anda di manapun berada. Kami bisa dipanggil ke rumah, kontrakan, tempat kost, hotel, wisma hingga penginapan dan sendi dengan menggunakan tekanan lembut atau manipulasi.
                  </Text>
                </CardBody>
              </Card>
            </Flex>
            <Flex gap={5} mt={"5vh"}>
              <Card w={"55vh"}>
                <CardHeader display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={3} mt={5}>
                  <GoPerson size="50px" color="teal" />
                  <Heading size="md" textAlign="center">
                    Terapis Profesional
                  </Heading>
                </CardHeader>
                <CardBody mt={5}>
                  <Text textAlign="center">
                    Terapis kami adalah orang-orang yang berpengalaman dalam bidang ini. Mereka telah dibekali pelatihan dan pendidikan untuk skill pijat memijat. Semua terapis kami telah memegang sertifikat lulus uji layanan pijat terbaik
                  </Text>
                </CardBody>
              </Card>
              <Card w={"55vh"}>
                <CardHeader display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={3} mt={5}>
                  <GoFileZip size="50px" color="teal" />
                  <Heading size="md" textAlign="center">
                    Menu Beragam
                  </Heading>
                </CardHeader>
                <CardBody mt={5}>
                  <Text textAlign="center">Kami tidak hanya menyediakan satu atau dua menu pijat saja. Di sini, kami menyediakan banyak teknik pijat yang ,br. bisa Anda sesuaikan dengan keluhan atau kebutuhan saat ini.</Text>
                </CardBody>
              </Card>
              <Card w={"55vh"}>
                <CardHeader display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={3} mt={5}>
                  <GoCodeOfConduct size="50px" color="teal" />
                  <Heading size="md" textAlign="center">
                    Harga Murah dan Bersahabat
                  </Heading>
                </CardHeader>
                <CardBody mt={5}>
                  <Text textAlign="center">
                    Dimana lagi Anda bisa menemukan tempat pijat panggilan yang tarifnya murah dan bersahabat selain di Go-Pijat. Kami mematok tarif yang tidak jauh berbeda dengan jara pijat di tempat pijat. Kami dijamin murah dan
                    terjangkau
                  </Text>
                </CardBody>
              </Card>
            </Flex>
          </Box>
          <Footer />
        </Stack>
      </Layout>
    </>
  );
}
