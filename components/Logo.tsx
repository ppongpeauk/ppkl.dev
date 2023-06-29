"use client";

import { Link, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Logo() {
  return (
    <Link as={NextLink} href="/" _hover={{ textDecor: "none" }}>
      <Text
        fontSize="lg"
        fontWeight="bolder"
        color={useColorModeValue("gray.800", "white")}
        transition={"all 0.2s ease"}
        _hover={{ color: useColorModeValue("gray.600", "gray.400") }}
      >
        Pete Pongpeauk.
      </Text>
    </Link>
  );
}
