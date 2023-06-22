import React from 'react';
import SearchIcon from '@components/icons/SearchIcon';

interface HeaderSearchProps {
  isActive: boolean;
  handleSearchClick: () => void;
}

export default function HeaderSearch({ isActive, handleSearchClick }: HeaderSearchProps) {
  return (
    <div className="flex">
      <SearchIcon onClick={handleSearchClick} size={4} />
      {isActive && (
        <input
          className="focus:outline-none border-b text-xs border-primaryBlack ml-2 "
          type="search"
        />
      )}
    </div>
  );
}
