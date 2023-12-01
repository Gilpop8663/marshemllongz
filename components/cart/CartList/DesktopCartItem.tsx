import React from 'react';
import Image from 'next/image';
import QuantitySelector from '@components/shop/QuantitySelector';
import { getFormattedPrice } from '@utils/common';
import { CartType } from '@type/cartType';

interface DesktopCartItemProps {
  cart: CartType;
}

export default function DesktopCartItem({ cart }: DesktopCartItemProps) {
  const { imageUrl, option, optionKind, price, quantity, title, stock } = cart;

  return (
    <div className="hidden sm:grid grid-cols-5 items-center py-6">
      <div className="flex col-span-3">
        <div className="relative h-20 aspect-square">
          <Image src={imageUrl} alt={title} fill />
        </div>
        <div className="flex flex-col justify-between ml-6">
          <div className="flex flex-col">
            <span className="text-sm">{title}</span>
            <span className="text-xs mt-1">
              {optionKind === 'design' ? '디자인' : '사이즈'}: {option}
            </span>
          </div>
          <button className="flex text-sm self-start">삭제하기</button>
        </div>
      </div>
      <QuantitySelector initialQuantity={quantity} title={title} stock={stock} />
      <span className="text-sm self-center text-center">{getFormattedPrice(price)}원</span>
    </div>
  );
}
