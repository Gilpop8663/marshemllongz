import React from 'react';
import { ProductCart } from '@type/productType';
import ProductCartItem from './ProductCartItem';

interface ProductCartListProps {
  productList: ProductCart[];
}

export default function ProductCartList({ productList }: ProductCartListProps) {
  return (
    <div className="flex flex-col gap-8">
      {productList.map((product) => (
        <ProductCartItem key={product.id} product={product}  />
      ))}
    </div>
  );
}
