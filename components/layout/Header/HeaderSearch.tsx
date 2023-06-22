import React from 'react';

interface HeaderSearchProps {
  isActive: boolean;
}

export default function HeaderSearch({ isActive }: HeaderSearchProps) {
  return (
    <div className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-4 h-4 cursor-pointer hover:text-darkGray"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      {isActive && (
        <input
          className="focus:outline-none border-b text-xs border-primaryBlack ml-2"
          type="search"
        />
      )}
    </div>
  );
}
