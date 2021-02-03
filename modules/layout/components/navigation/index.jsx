import React, { useContext } from 'react';
import { Box, Flex, Link as CustomLink } from 'theme-ui';
import NavContext from '@/modules/layout/NavContext';

export default function Navigation() {
  const [, navigation] = useContext(NavContext);
  return (
    <Box as="nav">
      <Flex spacing="16px">
        {navigation.map((n, i) => (
          <CustomLink key={`nav-item-${i}`} href={n.link.url}>
            {n.label}
          </CustomLink>
        ))}
      </Flex>
    </Box>
  );
}
