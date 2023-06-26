import React from 'react';
import { CartType } from '@type/cartType';
import DesktopCartItem from './DesktopCartItem';
import MobileCartItem from './MobileCartItem';

interface CartItemProps {
  cart: CartType;
}

export default function CartItem({ cart }: CartItemProps) {
  return (
    <div className="border-b first:border-t sm:first:border-t-0 sm:last:border-b-0 border-primaryBlack text-primaryBlack">
      <DesktopCartItem cart={cart} />
      <MobileCartItem cart={cart} />
    </div>
  );
}
