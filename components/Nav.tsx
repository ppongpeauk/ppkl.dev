// Next
import { usePathname } from "next/navigation";

// Components
import Logo from "@/components/Logo";
import ThemeButton from "@/components/ThemeButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { Roboto_Flex } from "next/font/google";
const font = Roboto_Flex({ subsets: ["latin"] });

function LinkItem({
  href,
  path,
  children,
}: {
  href: string;
  path: string;
  children: React.ReactNode;
}) {
  const active = path === href;
  return (
    <Link
      as={NextLink}
      p={2}
      bg={active ? "gray.200" : undefined}
      color={
        useColorModeValue(active ? "black" : "black", active ? "black" : "white")
      }
      href={href}
      height="100%"
      borderRadius={4}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const path = usePathname();

  return (
    <Box
      width="100%"
      as="nav"
      // bg={useColorModeValue("white", "gray.800")}
      css={{ backdropFilter: "blur(5px)" }}
      zIndex={128}
      className={font.className}
    >
      <Container
        display="flex"
        paddingTop={2}
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          height={16}
          alignItems="center"
          justifyContent="space-between"
          wrap="wrap"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tight"}>
              <Logo />
            </Heading>
          </Flex>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/work" path={path}>
            Work
          </LinkItem>
          <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem>
        </Stack>
        <ThemeButton/>
      </Container>
    </Box>
  );
}
