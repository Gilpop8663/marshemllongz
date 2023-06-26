import React from 'react';
import ProductDescription from '@components/shop/ProductDescription';
import ProductDetail from '@components/shop/ProductDetail';
import ProductReview from '@components/shop/ProductReview';
import { ProductItem, RecommendedProduct, Review } from '@type/productType';

interface ProductDetailContainerProps {
  productDetail: ProductItem;
  recommendedProductList: RecommendedProduct[];
  reviewList: Review[];
  score: number;
  totalPages: number;
}

export default function ProductDetailContainer({
  productDetail,
  recommendedProductList,
  reviewList,
  score,
  totalPages,
}: ProductDetailContainerProps) {
  return (
    <div>
      <ProductDetail
        productDetail={productDetail}
        recommendedProductList={recommendedProductList}
      />
      <div className="mb-8">
        <ProductDescription reviewListCount={reviewList.length} />
      </div>
      <ProductReview reviewList={reviewList} score={score} totalPages={totalPages} />
    </div>
  );
}
