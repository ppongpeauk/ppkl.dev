"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Page() {
  return (
    <Box
      as="main"
      pb={8}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Box mr="8" borderRadius="100%" overflow="hidden">
        <Image
          src="/images/profile.png"
          alt="Pete Pongpeauk"
          width={200}
          height={200}
          className="rounded-full"
        />
      </Box>
      <Box>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color={useColorModeValue("gray.800", "white")}
        >
          Pete Pongpeauk
        </Text>
        <Text
          fontSize="lg"
          fontWeight="normal"
          color={useColorModeValue("gray.800", "white")}
        >
          (Software Developer / Designer)
        </Text>
      </Box>
    </Box>
  );
}
