import Section from "@/components/section";
import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";
import Nav from "components/Nav";
import Head from "next/head";
import Image from "next/image";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box as="main" pb={8}>
      <Head>
        {/* TODO: metadata */}
        <title>Pete Pongpeauk - Home</title>
      </Head>
      <Box>
        <Nav />
      </Box>
      <Container maxW="container.lg" pt={36}>
        <Section delay={0.1}>
          <Box
            as="main"
            pb={8}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              mr="8"
              borderRadius="100%"
              overflow="hidden"
              outline="2px solid"
              outlineColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Image
                src="/images/profile.png"
                alt="Pete Pongpeauk"
                width={160}
                height={160}
              />
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="bold"
              >
                Pete Pongpeauk
              </Text>
              <Text
                fontSize="md"
                fontWeight="bold"
              >
                (Software Developer)
              </Text>
            </Box>
          </Box>
        </Section>
        {children}
      </Container>
    </Box>
  );
}
