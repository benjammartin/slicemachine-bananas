import React from 'react';
import { Box, Container, Flex, Link as CustomLink } from 'theme-ui';
import Logo from '@/modules/layout/components/logo';
import Link from 'next/link';
import Navigation from '@/modules/layout/components/navigation';

export default function Header() {
  return (
    <Container as="header" py="32px">
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Link passHref href="/">
          <CustomLink>
            <Logo />
          </CustomLink>
        </Link>
        <Navigation />
      </Flex>
    </Container>
  );
}
