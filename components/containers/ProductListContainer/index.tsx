import React from 'react';
import PreviewProductList from '@components/shop/PreviewProductList';
import { ProductItemPreview } from '@type/productType';

interface ProductListContainerProps {
  bestProducts: ProductItemPreview[];
  newProducts: ProductItemPreview[];
}

export default function ProductListContainer({
  bestProducts,
  newProducts,
}: ProductListContainerProps) {
  return (
    <div>
      <PreviewProductList title="BEST" products={bestProducts} visibleMoreButtonCount={9} />
      <PreviewProductList title="NEW" products={newProducts} visibleMoreButtonCount={6} />
    </div>
  );
}
