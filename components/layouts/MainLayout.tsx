import { Box, Container } from "@chakra-ui/react";
import Nav from "components/Nav";
import Head from "next/head";

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
        {children}
      </Container>
    </Box>
  );
}
