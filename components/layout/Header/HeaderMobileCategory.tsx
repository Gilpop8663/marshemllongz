import React, { useState } from 'react';
import ArrowDownIcon from '@components/icons/ArrowDownIcon';
import ArrowUpIcon from '@components/icons/ArrowUpIcon';

interface HeaderMobileCategoryProps {
  title: string;
  categories: string[];
  initialActive: boolean;
}

export default function HeaderMobileCategory({
  title,
  categories,
  initialActive,
}: HeaderMobileCategoryProps) {
  const [isActive, setIsActive] = useState(initialActive);
  return (
    <div className="text-sm text-primaryBlack font-medium">
      <button
        type="button"
        aria-label={isActive ? `${title} 카테고리 닫기` : `${title} 카테고리 펼치기`}
        className="flex cursor-pointer items-center justify-between w-full"
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        <span>{title}</span>
        {isActive ? <ArrowUpIcon size={4} /> : <ArrowDownIcon size={4} />}
      </button>
      {isActive && (
        <div className="flex flex-col  gap-2 mt-6 pl-4">
          {categories.map((category) => (
            <span key={category} className="cursor-pointer p-2 w-max hover:text-darkGray">
              {category}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
