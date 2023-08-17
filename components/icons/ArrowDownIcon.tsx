import React from 'react';

interface ArrowDownIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: number;
}

export default function ArrowDownIcon({ size, ...rest }: ArrowDownIconProps) {
  return (
    <button {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-${size} h-${size} cursor-pointer`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  );
}
