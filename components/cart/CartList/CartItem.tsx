import React from 'react';
import { CartType } from '@type/cartType';

interface CartItemProps {
  cart: CartType;
}

export default function CartItem({ cart }: CartItemProps) {
  return <div>CartItem</div>;
}
