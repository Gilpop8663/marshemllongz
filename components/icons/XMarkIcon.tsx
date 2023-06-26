import React from 'react';

interface XMarkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: number;
}

export default function XMarkIcon({ size, ...rest }: XMarkProps) {
  return (
    <button aria-label="닫기" {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`w-${size} h-${size} cursor-pointer text-primaryBlack hover:text-darkGray`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}
