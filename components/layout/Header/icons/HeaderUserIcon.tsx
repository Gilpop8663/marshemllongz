import React from 'react';

interface HeaderUserIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: number;
}

export default function HeaderUserIcon({ size, ...rest }: HeaderUserIconProps) {
  return (
    <button aria-label="내 정보" {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-${size} h-${size} cursor-pointer  text-primaryBlack hover:text-darkGray`}
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
