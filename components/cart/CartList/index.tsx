import React from 'react';
import { CartType } from '@type/cartType';
import CartItem from './CartItem';

interface CartListProps {
  cartItems: CartType[];
}

export default function CartList({ cartItems }: CartListProps) {
  return (
    <div>
      <div className="text-lg font-medium mb-8 sm:text-xl">장바구니 ({cartItems.length})</div>
      <div className="sm:grid grid-cols-7 text-sm hidden">
        <div className="col-span-6 grid grid-cols-5 text-center mb-3">
          <span className="col-span-3 text-start">상품 정보</span>
          <span>수량</span>
          <span>가격</span>
        </div>
        <span className="col-span-1 text-center">배송비</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 items-center  sm:border-t  sm:border-b border-primaryBlack ">
        <div className="w-full sm:col-span-6">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cart={cartItem} />
          ))}
        </div>
        <div className="flex flex-col gap-2 text-sm text-center justify-center px-4">
          <span>무료</span>
          <span>50,000원 이상 구매 시 무료</span>
        </div>
      </div>
    </div>
  );
}
