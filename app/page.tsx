"use client";

import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { BsSpotify } from "react-icons/bs";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

export default function Page() {
  return (
    <>
      <Head>
        <title>Pete Pongpeauk</title>
        <meta
          name="description"
          content="Pete Pongpeauk is a software developer and designer based in Washington, DC."
        />
        <meta property="og:title" content="Pete Pongpeauk" />
        <meta
          property="og:description"
          content="Pete Pongpeauk is a software developer and designer based in Washington, DC."
        />
        <meta property="og:url" content="https://ppkl.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/profile.png" />
        <meta property="og:image:alt" content="Pete Pongpeauk" />
      </Head>
      <Box maxW="container.sm" margin="auto">
        <Section delay={0.2}>
          <Container maxW="container.md">
            <Heading
              as="h3"
              fontSize="2xl"
              letterSpacing={"tighter"}
              mt={2}
              mb={2}
              variant="section-title"
            >
              About
            </Heading>
            <Paragraph>
              Pete Pongpeauk is a software developer based in
              Washington, DC. He is currently studying Computer Science at
              George Mason University in Fairfax, Virginia.
            </Paragraph>
          </Container>
        </Section>
        <Section delay={0.3}>
          <Container maxW="container.md">
            <Heading
              as="h3"
              fontSize="2xl"
              letterSpacing={"tighter"}
              mt={2}
              mb={2}
              variant="section-title"
            >
              On The Web
            </Heading>
            <Box>
              <Link href="https://github.com/ppongpeauk" isExternal>
                <Button mb={2} variant="ghost" leftIcon={<IoLogoGithub />}>
                  GitHub
                </Button>
              </Link>
              <br />
              <Link href="https://linkedin.com/in/pete-pongpeauk" isExternal>
                <Button mb={2} variant="ghost" leftIcon={<IoLogoLinkedin />}>
                  LinkedIn
                </Button>
              </Link>
              <br />
              <Link href="https://twitter.com/restrafes" isExternal>
                <Button mb={2} variant="ghost" leftIcon={<IoLogoTwitter />}>
                  Twitter
                </Button>
              </Link>
              <br />
              <Link href="https://instagram.com/pete.pkl" isExternal>
                <Button mb={2} variant="ghost" leftIcon={<IoLogoInstagram />}>
                  Instagram
                </Button>
              </Link>
              <br />
            </Box>
          </Container>
        </Section>
      </Box>
    </>
  );
}
