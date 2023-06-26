import React from 'react';
import Button from '@components/common/Button';
import { CartType } from '@type/cartType';
import CartList from '../CartList';
import CartOrderSummary from '../CartOrderSummary';

interface CartContainerProps {
  cartItems: CartType[];
  totalPrice: number;
  deliveryFee: number;
}

export default function CartContainer({ cartItems, totalPrice, deliveryFee }: CartContainerProps) {
  return (
    <div className="flex flex-col">
      <CartList cartItems={cartItems} />
      <div className="sm:w-1/2 sm:self-end sm:flex sm:flex-col">
        <CartOrderSummary totalPrice={totalPrice} deliveryFee={deliveryFee} />
        <div className="py-12 sm:w-max sm:self-end">
          <Button text="구매하기" color="black" />
        </div>
      </div>
    </div>
  );
}
