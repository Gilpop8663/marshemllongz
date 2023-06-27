import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: InputProps) {
  return (
    <input
      className="border w-full border-primaryBlack px-3 py-2 text-sm font-thin focus:outline-none"
      {...rest}
    />
  );
}
