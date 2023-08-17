import React from 'react';

interface ArrowUpIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: number;
}

export default function ArrowUpIcon({ size, ...rest }: ArrowUpIconProps) {
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
}
