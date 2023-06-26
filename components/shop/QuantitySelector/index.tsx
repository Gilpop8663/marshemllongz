import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  handleDecreaseClick: () => void;
  handleIncreaseClick: () => void;
  title: string;
}

export default function QuantitySelector({
  quantity,
  handleDecreaseClick,
  handleIncreaseClick,
  title,
}: QuantitySelectorProps) {
  return (
    <div className="flex">
      <button
        onClick={handleDecreaseClick}
        type="button"
        className="border w-6 h-6 border-r-0 border-primaryBlack flex justify-center items-center sm:w-8 sm:h-8"
        aria-label={`${title} 수량 감소`}
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
        className="border w-12 h-6 border-primaryBlack text-center text-xs sm:w-16 sm:h-8 sm:text-sm focus:outline-none"
        value={quantity}
      />
      <button
        onClick={handleIncreaseClick}
        aria-label={`${title} 수량 증가`}
        type="button"
        className="border w-6 h-6 border-l-0 border-primaryBlack flex justify-center items-center sm:w-8 sm:h-8"
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
