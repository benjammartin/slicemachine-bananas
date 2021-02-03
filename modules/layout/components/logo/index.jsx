import React, { useContext } from 'react';
import NavContext from '@/modules/layout/NavContext';
import { Image } from 'theme-ui';

export default function Logo() {
  const [logo] = useContext(NavContext);
  return (
    <Image
      width={logo.dimensions.width}
      height={logo.dimensions.height}
      src={logo.url}
      alt={logo.alt}
    />
  );
}
