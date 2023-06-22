import React from 'react';
import SearchIcon from '@components/icons/SearchIcon';

export default function SearchBar() {
  return (
    <div className="border py-2 px-3 border-primaryBlack flex items-center">
      <SearchIcon size={5} />
      <input type="search" className="focus:outline-none w-full pl-3" />
    </div>
  );
}
