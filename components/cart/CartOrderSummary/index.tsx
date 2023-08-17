import React from 'react';
import { getFormattedPrice } from '@utils/common';
import CartOrderCard from './CartOrderCard';

interface CartOrderSummaryProps {
  totalPrice: number;
  deliveryFee: number;
}

export default function CartOrderSummary({ totalPrice, deliveryFee }: CartOrderSummaryProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 border-b border-t sm:border-t-0 border-primaryBlack py-4">
        <CartOrderCard label="상품 합계" value={`${getFormattedPrice(totalPrice)}원`} />
        <CartOrderCard
          label="배송비"
          value={deliveryFee > 0 ? `${getFormattedPrice(deliveryFee)}원` : '무료'}
        />
      </div>
      <div className="font-medium">
        <CartOrderCard
          label="합계"
          value={`${getFormattedPrice(totalPrice + deliveryFee)}원`}
          fontSize="base"
        />
      </div>
    </div>
  );
}
