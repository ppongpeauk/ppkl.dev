"use client";

import { Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Text
        fontSize="lg"
        fontWeight="bold"
        color={useColorModeValue("gray.800", "white")}
      >
        Pete Pongpeauk
      </Text>
    </Link>
  )
}