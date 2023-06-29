import React from 'react';

interface PlusIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: number;
}

export default function PlusIcon({ size, ...rest }: PlusIconProps) {
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  );
}
