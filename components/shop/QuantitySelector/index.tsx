import React, { ChangeEvent } from 'react';
import { useQuantity } from '@hooks/useQuantity';

interface QuantitySelectorProps {
  title: string;
  stock: number;
  initialQuantity: number;
}

export default function QuantitySelector({ initialQuantity, title, stock }: QuantitySelectorProps) {
  const { quantity, decreaseQuantity, increaseQuantity, quantityInputRef, updateQuantity } =
    useQuantity(initialQuantity, { stock });

  return (
    <div className="flex " title={stock === 0 ? '재고가 없습니다.' : ''}>
      <button
        onClick={decreaseQuantity}
        type="button"
        className="border w-6 h-6 border-r-0 border-primaryBlack flex justify-center items-center sm:w-8 sm:h-8 disabled:cursor-not-allowed"
        aria-label={`${title} 수량 감소`}
        disabled={stock === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 sm:w-4 sm:h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
      <input
        className="border w-12 h-6 border-primaryBlack text-center text-xs sm:w-16 sm:h-8 sm:text-sm focus:outline-none disabled:cursor-not-allowed"
        value={quantity}
        inputMode="numeric"
        disabled={stock === 0}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const { value } = event.target;
          if (isNaN(Number(value))) return;

          updateQuantity(Number(value));
        }}
        ref={quantityInputRef}
      />
      <button
        onClick={increaseQuantity}
        aria-label={`${title} 수량 증가`}
        disabled={stock === 0}
        type="button"
        className="border w-6 h-6 border-l-0 border-primaryBlack flex justify-center items-center sm:w-8 sm:h-8 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 sm:w-4 sm:h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  );
}
