import { Box, Container } from "@chakra-ui/react";
import Nav from "components/Nav";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        {/* TODO: metadata */}
        <title>Pete Pongpeauk - Home</title>
      </Head>
      <Nav />
      <Container maxW="container.lg" pt={16}>
        {children}
      </Container>
    </Box>
  )
}