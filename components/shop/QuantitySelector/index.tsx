import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  handleDecreaseClick: () => void;
  handleIncreaseClick: () => void;
  ariaIncreaseLabel: string;
  ariaDecreaseLabel: string;
}

export default function QuantitySelector({
  quantity,
  handleDecreaseClick,
  handleIncreaseClick,
  ariaIncreaseLabel,
  ariaDecreaseLabel,
}: QuantitySelectorProps) {
  return (
    <div className="flex">
      <button
        onClick={handleDecreaseClick}
        type="button"
        className="border w-6 h-6 border-r-0 border-primaryBlack flex justify-center items-center md:w-8 md:h-8"
        aria-label={ariaDecreaseLabel}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 md:w-4 md:h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
      <input
        className="border w-6 h-6 border-primaryBlack text-center text-xs md:w-8 md:h-8 md:text-sm focus:outline-none"
        value={quantity}
      />
      <button
        onClick={handleIncreaseClick}
        aria-label={ariaIncreaseLabel}
        type="button"
        className="border w-6 h-6 border-l-0 border-primaryBlack flex justify-center items-center md:w-8 md:h-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 md:w-4 md:h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  );
}
