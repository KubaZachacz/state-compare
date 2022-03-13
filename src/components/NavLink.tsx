import { Box, BoxProps, Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavLinkProps extends BoxProps {
  href: string;
  matches?: RegExp;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  matches,
  children,
  ...rest
}) => {
  const router = useRouter();

  const isActive =
    (matches && matches.test(router.pathname)) || router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <Box
        as="a"
        borderBottomWidth={2}
        borderBottomColor={isActive ? "black" : "transparent"}
        textDecoration="none"
        {...rest}
      >
        {children}
      </Box>
    </NextLink>
  );
};

export default NavLink;
