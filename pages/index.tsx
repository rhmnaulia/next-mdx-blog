import Container from "../components/Container";
import Head from "next/head";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>Home - Aulia Rahman</title>
      </Head>
      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
        px={2}
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
        >
          <Heading mb={2}>Hi, I'm Aulia Rahman</Heading>
          <Text color={colorSecondary[colorMode]}>
            Student and Software engineer experienced in Javascript (React, Vue,
            Node), and some Golang knowledge. Curious by nature. I am passionate
            about creating clean and maintainable code to solve a problem. I am
            always hungry for knowledge
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
