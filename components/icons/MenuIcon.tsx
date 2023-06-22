import React from 'react';

interface MenuIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: number;
}

export default function MenuIcon({ size, ...rest }: MenuIconProps) {
  return (
    <button aria-label="메뉴" {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`w-${size} h-${size} cursor-pointer text-primaryBlack hover:text-darkGray`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
