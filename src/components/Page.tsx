import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link as ChakraLink,
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import Link from "next/link";
import { VscGithubInverted } from "react-icons/vsc";

const Page: React.FC = ({ children }) => {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center" py={4}>
        <Link href="/" passHref>
          <Heading as="a">Tic tac toe with states</Heading>
        </Link>
      </Box>
      <HStack justifyContent="center" spacing={4} mb={8}>
        <NavLink href="/redux">Redux</NavLink>
        <NavLink href="/mobx">MobX</NavLink>
        <NavLink href="/valtio">Valtio</NavLink>
        <NavLink href="/context">Context</NavLink>
      </HStack>
      {children}
      <Flex as="footer" position="fixed" bottom={0} right={0} p={2} bg="white">
        <ChakraLink fontSize="sm" href="https://github.com/KubaZachacz/state-compare">
          <Icon as={VscGithubInverted} verticalAlign="middle"/> github.com/KubaZachacz/state-compare
        </ChakraLink>
      </Flex>
    </Container>
  );
};

export default Page;
