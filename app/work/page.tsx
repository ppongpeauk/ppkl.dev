"use client";

import Section from "@/components/section";
import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  Text
} from "@chakra-ui/react";

function WorkCard({
  uri = "/",
  title = "Work Title",
  description = "Work Description",
  image = "test-thumbnail.jpg",
}: {
  uri?: string;
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Link href={uri}>
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m={8}
      >
        <Box
          objectFit="cover"
          height="200px"
          borderRadius={8}
          overflow={"hidden"}
        >
          <Image
            src={`/images/works/${image}`}
            alt="Pete Pongpeauk"
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          mt={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="md" fontWeight="normal">
            {description}
          </Text>
        </Box>
      </Container>
    </Link>
  );
}

export default function Page() {
  return (
    <>
      <Container maxW="container.sm" margin="auto" p={8}>
        <Section delay={0.1}>
          <Heading as="h3" fontSize="3xl" mt={2} variant="section-title">
            Work
          </Heading>
          <Box>
            <WorkCard />
            <WorkCard />
            <WorkCard />
          </Box>
        </Section>
      </Container>
    </>
  );
}
