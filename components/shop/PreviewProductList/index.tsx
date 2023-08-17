import React from 'react';
import Button from '@components/common/Button';
import { ProductItemPreview } from '@type/productType';
import ProductItem from '../ProductList/ProductItem';

interface PreviewProductListProps {
  title: string;
  products: ProductItemPreview[];
  visibleMoreButtonCount: number;
}

export default function PreviewProductList({
  title,
  products,
  visibleMoreButtonCount,
}: PreviewProductListProps) {
  const slicedProducts = products.slice(0, visibleMoreButtonCount);
  const isVisible = products.length > visibleMoreButtonCount;

  return (
    <div>
      <h3 className="text-center text-2xl sm:text-3xl font-medium py-16">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 gap-y-6 sm:gap-y-9 lg:gap-y-12 gap-x-4 sm:gap-x-8 xl:gap-x-12">
        {slicedProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
      {isVisible && (
        <div className="py-24 border-b border-primaryBlack">
          <Button text="더 보러가기" color="white" />
        </div>
      )}
    </div>
  );
}
