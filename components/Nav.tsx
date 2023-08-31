// Next
import { usePathname } from "next/navigation";

// Components
import Logo from "@/components/Logo";
import ThemeButton from "@/components/ThemeButton";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
  useColorModeValue
} from "@chakra-ui/react";

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
      p={2}
      bg={active ? "gray.200" : undefined}
      color={useColorModeValue(
        active ? "black" : "black",
        active ? "black" : "white"
      )}
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
      position="fixed"
      width="100%"
      as="nav"
      // bg={useColorModeValue("white", "gray.800")}
      css={{ backdropFilter: "blur(5px)" }}
      zIndex={128}
      className={font.className}
    >
      <Container
        display="flex"
        py={8}
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
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

        {/* <Stack
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
        </Stack> */}
        <Spacer />
        <Flex gap={4}>
          {/* <Button
            as={Link}
            href="/work"
            variant="link"
            fontSize={"md"}
            fontWeight="bold"
            letterSpacing={"tighter"}
            textUnderlineOffset={4}
            color={useColorModeValue("gray.800", "white")}
            transition={"all 0.2s ease"}
            _hover={{ color: useColorModeValue("gray.600", "gray.400") }}
          >
            Work
          </Button> */}
          <Button
            as={Link}
            href="/resume.pdf"
            variant="link"
            fontSize={"md"}
            fontWeight="bold"
            letterSpacing={"tighter"}
            textUnderlineOffset={4}
            color={useColorModeValue("gray.800", "white")}
            transition={"all 0.2s ease"}
            _hover={{ color: useColorModeValue("gray.600", "gray.400") }}
          >
            Résumé
          </Button>
          <ThemeButton />
        </Flex>
      </Container>
    </Box>
  );
}
