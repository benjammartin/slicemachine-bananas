import React, { useContext } from 'react';
import { Box, Button, Flex, Link as CustomLink } from 'theme-ui';
import NavContext from '@/modules/layout/NavContext';

export default function Navigation() {
  const [, navigation, cta] = useContext(NavContext);
  console.log(cta.label);
  return (
    <Box as="nav">
      <Flex sx={{ alignItems: 'center' }}>
        <Box mr="24px">
          {navigation.map((n, i) => (
            <CustomLink
              sx={{ mx: '4px' }}
              key={`nav-item-${i}`}
              href={n.link.url}
            >
              {n.label}
            </CustomLink>
          ))}
        </Box>
        <Button>{cta.label}</Button>
      </Flex>
    </Box>
  );
}
