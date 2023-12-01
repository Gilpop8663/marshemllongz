import React from 'react';
import { ProductItemPreview } from '@type/productType';
import ProductItem from './ProductItem';

interface ProductListProps {
  products: ProductItemPreview[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 gap-y-6 sm:gap-y-9 lg:gap-y-12 gap-x-4 sm:gap-x-8 xl:gap-x-12">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
}
