import React from 'react';
import { getClassNames } from '@utils/common';
import { getPageRange } from '@utils/shop/common';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  const [startPage, endPage] = getPageRange({ totalPages, currentPage });

  const pages = [];

  for (let page = startPage; page <= endPage; page += 1) {
    pages.push(page);
  }

  return (
    <div className="flex gap-3 items-center text-primaryBlack">
      {5 < currentPage && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 relative top-0.5 cursor-pointer"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      )}
      {pages.map((page) => (
        <span
          key={page}
          className={getClassNames(
            currentPage === page ? 'text-darkGray/70' : '',
            'text-sm cursor-pointer'
          )}
        >
          {page}
        </span>
      ))}
      {endPage < totalPages && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 relative top-0.5 cursor-pointer"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      )}
    </div>
  );
}
