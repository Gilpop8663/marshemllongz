import React from 'react';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  description?: string;
}

export default function CheckBox({ text, description }: CheckBoxProps) {
  return (
    <div className="flex items-center text-sm">
      <input type="checkbox" className="w-4 h-4" />
      <div className="relative flex flex-col ml-2">
        <span>{text}</span>
        {description && <span className="text-xs mt-1">{description}</span>}
      </div>
    </div>
  );
}
