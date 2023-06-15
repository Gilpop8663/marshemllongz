import React from 'react';
import { getClassNames } from '@utils/common';

type ButtonColorType = 'white' | 'black';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: ButtonColorType;
}

export default function Button({ text, color, ...rest }: ButtonProps) {
  return (
    <button
      className={getClassNames(
        color === 'white'
          ? 'bg-primaryWhite text-primaryBlack hover:bg-primaryBlack hover:text-primaryWhite'
          : 'bg-primaryBlack text-primaryWhite hover:bg-darkGray hover:border-darkGray',
        'w-full border border-primaryBlack transition-colors rounded-full py-2 font-normal text-sm'
      )}
      {...rest}
    >
      {text}
    </button>
  );
}
