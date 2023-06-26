import React from 'react';
import { getFormattedPrice } from '@utils/common';
import { ProductCart } from '@type/productType';
import QuantitySelector from '../QuantitySelector';

interface ProductCartItemProps {
  product: ProductCart;
}

export default function ProductCartItem({ product }: ProductCartItemProps) {
  const { price, quantity, title } = product;

  return (
    <div className="flex justify-between h-14 sm:h-16">
      <div className="flex flex-col justify-between">
        <span className="text-xs sm:text-sm">{title}</span>
        <QuantitySelector
          quantity={quantity}
          title={title}
          handleDecreaseClick={() => {}}
          handleIncreaseClick={() => {}}
        />
      </div>
      <div className="flex flex-col justify-between items-end ">
        <button aria-label={`${title} 상품 삭제`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <span className="text-xs sm:text-sm">{getFormattedPrice(price)}원</span>
      </div>
    </div>
  );
}
