import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import Page from "components/Page";
import type { NextPage } from "next";
import Link from "next/link";
import { VscGithubInverted } from "react-icons/vsc";

interface PageLinkProps {
  href: string;
  src: string;
  name: string;
  github: string;
}

const PageLink = ({ href, src, name, github }: PageLinkProps) => {
  return (
    <Box
      w="calc(50% - 1rem)"
      rounded="lg"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      transition="box-shadow 0.3s"
      cursor="pointer"
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      }}
      position="relative"
    >
      <Link href={href} passHref>
      
        <Box p={4} textAlign="center" role="group">
          <Image display="inline" height="100px" src={src} alt={name} />
          <Text
            fontSize="2xl"
            _groupHover={{
              textDecoration: "underline",
            }}
          >
            {name}
          </Text>
        </Box>
      </Link>
      <Box position="absolute" bottom={4} right={4}>
        <ChakraLink href={github} target="_blank">
          <Icon
            fontSize="lg"
            color="gray.500"
            verticalAlign="middle"
            as={VscGithubInverted}
            transition="color 0.3s"
            _hover={{
              color: "gray.800",
            }}
          />
        </ChakraLink>
      </Box>
    </Box>
  );
};

const Home: NextPage = () => {
  return (
    <Page>
      <Heading fontSize="3xl" textAlign="center" mb={8}>
        Select state library
      </Heading>
      <Flex justifyContent="space-around" gap={8} flexWrap="wrap">
        <PageLink
          name="Redux toolkit"
          src="/images/redux-logo.svg"
          href="/redux"
          github="https://github.com/reduxjs/redux-toolkit"
        />
        <PageLink
          name="Mobx"
          src="/images/mobx-logo.svg"
          href="/mobx"
          github="https://github.com/mobxjs/mobx"
        />
        <PageLink
          name="Valtio"
          src="/images/valtio-logo.svg"
          href="/valtio"
          github="https://github.com/pmndrs/valtio"
        />
        <PageLink
          name="React Context"
          src="/images/react-logo.svg"
          href="/context"
          github="https://github.com/facebook/react"
        />
      </Flex>
    </Page>
  );
};

export default Home;
