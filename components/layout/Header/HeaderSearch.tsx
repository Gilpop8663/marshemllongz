import React from 'react';
import SearchIcon from '@components/icons/SearchIcon';

interface HeaderSearchProps {
  isSearchActive: boolean;
  handleSearchClick: () => void;
}

export default function HeaderSearch({ isSearchActive, handleSearchClick }: HeaderSearchProps) {
  return (
    <div className="flex">
      <SearchIcon onClick={handleSearchClick} size={4} />
      {isSearchActive && (
        <input
          className="focus:outline-none border-b text-xs border-primaryBlack ml-2 "
          type="search"
        />
      )}
    </div>
  );
}
