import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Select from '@components/common/Select';
import { getFormattedPrice } from '@utils/common';
import { RecommendedProduct } from '@type/productType';

interface RecommendedProductItemProps {
  recommendedProduct: RecommendedProduct;
}

export default function RecommendedProductItem({
  recommendedProduct,
}: RecommendedProductItemProps) {
  const { imageUrl, price, selectedOption, title } = recommendedProduct;

  return (
    <div>
      <div className="flex mb-2">
        <div className="relative w-12 h-12  cursor-pointer">
          <Image alt={title} src={imageUrl} fill className="object-cover rounded-sm" />
        </div>
        <div className="flex flex-col text-sm justify-between ml-4">
          <span className="text-primaryBlack cursor-pointer">{title}</span>
          <span className="text-darkGray">{getFormattedPrice(price)}원</span>
        </div>
      </div>
      <Select {...selectedOption} />
    </div>
  );
}
