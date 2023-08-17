import React from 'react';

interface ProductDescriptionProps {
  reviewListCount: number;
}

export default function ProductDescription({ reviewListCount }: ProductDescriptionProps) {
  return (
    <div className="border-b flex gap-8 sm:gap-24 justify-center py-4 text-sm border-primaryBlack">
      <button type="button">상품 설명</button>
      <button type="button">후기 ({reviewListCount})</button>
    </div>
  );
}
