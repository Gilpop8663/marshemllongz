import React from 'react';
import Image from 'next/image';
import XMarkIcon from '@components/icons/XMarkIcon';
import QuantitySelector from '@components/shop/QuantitySelector';
import { getFormattedPrice } from '@utils/common';
import { CartType } from '@type/cartType';

interface MobileCartItemProps {
  cart: CartType;
}

export default function MobileCartItem({ cart }: MobileCartItemProps) {
  const { imageUrl, option, optionKind, price, quantity, title } = cart;

  return (
    <div className="flex justify-between items-start sm:hidden py-6">
      <div className="flex relative w-full">
        <div className="relative h-20 aspect-square">
          <Image src={imageUrl} alt={title} fill />
        </div>
        <div className="flex w-full  justify-between flex-col  ml-6">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-sm">{title}</span>
              <span className="text-xs mt-1">
                {optionKind === 'design' ? '디자인' : '사이즈'}: {option}
              </span>
            </div>
            <button className="hidden text-sm self-start">삭제하기</button>
          </div>
          <div className="mt-4">
            <QuantitySelector
              quantity={quantity}
              title={title}
              handleDecreaseClick={() => {}}
              handleIncreaseClick={() => {}}
            />
          </div>
          <span className="mt-2 text-sm">{getFormattedPrice(price)}원</span>
        </div>
      </div>
      <XMarkIcon
        className="p-3 relative -top-3 -right-3 sm:hidden"
        size={4}
        aria-label={`${title} 삭제`}
        title={`${title} 삭제`}
      />
    </div>
  );
}
