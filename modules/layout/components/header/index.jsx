import React from 'react';
import { Box, Flex, Link as CustomLink } from 'theme-ui';
import Logo from '@/modules/layout/components/logo';
import Link from 'next/link';
import Navigation from '@/modules/layout/components/navigation';

export default function Header() {
  return (
    <Box as="header" borderBottom="1px" borderColor="gray.100">
      <Flex px="24px" alignItems="center" justifyContent="space-between">
        <Link passHref href="/">
          <CustomLink>
            <Logo />
          </CustomLink>
        </Link>
        <Navigation />
      </Flex>
    </Box>
  );
}
