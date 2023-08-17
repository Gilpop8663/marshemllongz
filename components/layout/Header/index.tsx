import React from 'react';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

interface HeaderProps {
  cartQuantity: number;
}

export default function Header({ cartQuantity }: HeaderProps) {
  return (
    <>
      <HeaderDesktop cartQuantity={cartQuantity} />
      <HeaderMobile cartQuantity={cartQuantity} />
    </>
  );
}
