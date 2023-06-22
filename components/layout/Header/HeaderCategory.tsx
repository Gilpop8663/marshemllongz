import React, { useState } from 'react';
import { getClassNames } from '@utils/common';

interface HeaderCategoryProps {
  title: string;
  categories: string[];
}

export default function HeaderCategory({ title, categories }: HeaderCategoryProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative text-primaryBlack"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className="text-xs font-medium cursor-pointer hover:text-darkGray">{title}</div>
      <div
        className={getClassNames(
          isHover ? 'opacity-100' : 'opacity-0',
          'flex flex-col items-start absolute bg-white border p-2 text-xs gap-2 transition-opacity font-medium top-6 -left-2  w-max'
        )}
      >
        {categories.map((category) => (
          <span key={category} className="hover:text-darkGray cursor-pointer">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}
