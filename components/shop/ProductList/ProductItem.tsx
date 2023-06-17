import React, { useState } from 'react';
import Image from 'next/image';
import { getClassNames, getFormattedPrice, getPercentageNumber } from '@utils/common';

type CategoryType = 'new' | 'best';

interface ProductItemProps {
  imageUrl: string;
  hoverImageUrl: string;
  title: string;
  price: number;
  category?: CategoryType;
  discountPercent?: number;
}

export default function ProductItem({
  imageUrl,
  hoverImageUrl,
  title,
  price,
  category,
  discountPercent,
}: ProductItemProps) {
  const [hovered, setHovered] = useState(false);

  const toggleHovered = () => {
    setHovered((prev) => !prev);
  };

  const getCategoryText = () => {
    if (category === 'best') {
      return 'NEW';
    }

    return 'BEST 30';
  };

  const discountPrice =
    discountPercent && getPercentageNumber({ total: price, percent: discountPercent });

  const discountedPrice = discountPrice && price - Math.round(discountPrice);

  return (
    <div className="flex flex-col w-full cursor-pointer">
      <div
        className="relative w-full aspect-square"
        onMouseEnter={toggleHovered}
        onMouseLeave={toggleHovered}
      >
        {discountPercent && (
          <div className="bg-primaryRed w-12 h-12 rounded-full text-primaryWhite flex flex-col justify-center items-center text-xs absolute z-20 top-3 left-3 font-medium ">
            <span>NEW</span>
            <span>{discountPercent}%</span>
          </div>
        )}
        <Image
          className={getClassNames(
            hovered ? 'opacity-0' : '',
            'transition-opacity duration-300 z-10 absolute object-cover'
          )}
          priority={true}
          src={imageUrl}
          alt={title}
          fill={true}
        />
        <Image className="absolute object-cover" src={hoverImageUrl} alt={title} fill={true} />
      </div>
      <div className="flex flex-col items-center space-y-2 mt-2">
        <span className="text-xs text-primaryBlack">{title}</span>
        {category && (
          <span className="text-xs text-primaryOrange font-handWriting">{getCategoryText()}</span>
        )}
        <div className="text-sm">
          {!!discountedPrice && (
            <span className="text-primaryRed mr-1">{getFormattedPrice(discountedPrice)}원</span>
          )}
          <span className={getClassNames(discountPercent ? 'line-through' : '', ' text-darkGray')}>
            {getFormattedPrice(price)}원
          </span>
        </div>
      </div>
    </div>
  );
}
