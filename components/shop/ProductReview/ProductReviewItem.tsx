import React, { useState } from 'react';
import Image from 'next/image';
import { getClassNames } from '@utils/common';
import { Review } from '@type/productType';
import ProductRating from '../ProductRating';
import ProductReviewImage from './ProductReviewImage';

interface ProductReviewItemProps {
  userReview: Review;
}

export default function ProductReviewItem({ userReview }: ProductReviewItemProps) {
  const [isActive, setActive] = useState(false);
  const { category, name, content, score, date, imageList } = userReview;

  const handleToggleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div
      className={getClassNames(
        isActive ? 'flex-col' : 'flex',
        'justify-between first:border-t-2 border-b-2 border-primaryBlack py-6 text-primaryBlack gap-3'
      )}
      aria-label={`${name} 후기`}
    >
      <div onClick={handleToggleClick} className="flex flex-col cursor-pointer">
        <div className="flex items-center gap-2">
          {category === 'best' && (
            <div className="text-primaryWhite bg-primaryBlack text-xs p-1">베스트</div>
          )}
          <ProductRating rating={score} />
          <span className="text-sm">{name}</span>
          {date && (
            <span className="text-sm">{new Date(date).toLocaleDateString('ko').slice(0, -1)}</span>
          )}
        </div>
        <p
          className={getClassNames(
            isActive
              ? 'mt-3 text-sm whitespace-pre-wrap'
              : 'mt-3  whitespace-pre-wrap text-sm line-clamp-2'
          )}
        >
          {content}
        </p>
      </div>
      {imageList && (
        <div className={getClassNames(isActive ? 'mt-6' : '')}>
          <ProductReviewImage isActive={isActive} imageList={imageList} />
        </div>
      )}
    </div>
  );
}
