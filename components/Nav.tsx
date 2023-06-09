import Logo from "@/components/Logo";
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
import { usePathname } from "next/navigation";

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
      href={href}
      height="100%"
    >
      {children}
    </Link>
  );
}

function MenuLink({
  href,
  ref,
  ...props
}: {
  href: string;
  ref: any;
  [key: string]: any;
}) {
  return <Link ref={ref} as={NextLink} {...props} />;
}

export default function Navbar() {
  const path = usePathname();

  return (
    <Box
      width="100%"
      as="nav"
      bg={useColorModeValue("white", "gray.800")}
      css={{ backdropFilter: "blur(5px)" }}
      zIndex={128}
    ></Box>
  );
}
