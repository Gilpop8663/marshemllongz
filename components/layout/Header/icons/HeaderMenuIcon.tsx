import React from 'react';

interface HeaderMenuIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: number;
}

export default function HeaderMenuIcon({ size, ...rest }: HeaderMenuIconProps) {
  return (
    <button aria-label="메뉴">
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
