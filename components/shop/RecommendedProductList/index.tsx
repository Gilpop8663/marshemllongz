import React, { useState } from 'react';
import { RecommendedProduct } from '@type/productType';
import RecommendedProductItem from './RecommendedProductItem';

interface RecommendedProductListProps {
  recommendedProductList: RecommendedProduct[];
}

export default function RecommendedProductList({
  recommendedProductList,
}: RecommendedProductListProps) {
  const [isOpened, setIsOpened] = useState(true);

  const handleToggleOpenClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div>
      <h6 className="text-xs font-medium mb-2">함께 사면 좋은 마시멜롱템</h6>
      <div
        className="flex justify-between items-center border border-primaryBlack text-sm px-3 py-2 cursor-pointer"
        onClick={handleToggleOpenClick}
      >
        <span>같이 구매하면 더 귀여울거다 멍!</span>
        {isOpened ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        )}
      </div>
      {isOpened && (
        <div className="flex flex-col border border-t-0 border-primaryBlack p-4 gap-4">
          {recommendedProductList.map((recommendedProduct) => (
            <RecommendedProductItem
              key={recommendedProduct.id}
              recommendedProduct={recommendedProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
}
