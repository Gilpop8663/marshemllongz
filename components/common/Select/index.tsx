import React, { useState } from 'react';
import { getClassNames } from '@utils/common';

interface OptionItemsProps {
  label: string;
  value: string;
  description: string;
}

export interface SelectProps {
  title: string;
  selectedItemLabel: string;
  optionItems: OptionItemsProps[];
  handleOptionChange: () => void;
  isDisable?: boolean;
}

export default function Select({
  title,
  selectedItemLabel,
  optionItems,
  handleOptionChange,
  isDisable,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (isDisable) return;
    setIsOpen((prev) => !prev);
  };

  const onSelectClick = () => {
    handleOptionChange();
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <label className="text-xs mb-2 font-medium" htmlFor={title + optionItems[0].label}>
          {title}
        </label>
        <div
          className={getClassNames(
            isDisable
              ? 'border-darkGray/50 text-darkGray/50 cursor-not-allowed'
              : 'border-primaryBlack text-primaryBlack cursor-pointer',
            'flex justify-between items-center border  px-3 py-2 text-sm  font-sans'
          )}
          id={title + optionItems[0].label}
          onClick={toggleOpen}
        >
          <span>{selectedItemLabel}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>
        {isOpen && (
          <div className="relative">
            <div className="absolute z-10 top-0 w-full bg-primaryWhite  border border-t-0 border-primaryBlack cursor-pointer font-sans">
              {optionItems.map((optionItem) => (
                <div
                  className="flex justify-between px-3 py-2 text-sm hover:bg-whiteGray"
                  key={optionItem.label}
                  onClick={onSelectClick}
                >
                  <span>{optionItem.label}</span>
                  <span>{optionItem.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
