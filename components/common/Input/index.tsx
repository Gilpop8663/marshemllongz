import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  isRequired?: boolean;
}

export default function Input({ label, id, isRequired = false, ...rest }: InputProps) {
  return (
    <label className="flex flex-col gap-2 text-primaryBlack" htmlFor={id}>
      <div className="flex gap-2">
        <span className="text-sm">{label}</span>
        {isRequired && <span className="text-sm">*</span>}
      </div>
      <input
        id={id}
        className="border border-primaryBlack px-3 py-2 text-sm font-thin focus:outline-none"
        required={isRequired}
        {...rest}
      />
    </label>
  );
}
