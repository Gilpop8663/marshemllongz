import React from 'react';
import { Review } from '@type/productType';
import ProductReviewItem from './ProductReviewItem';

interface ProductReviewListProps {
  reviewList: Review[];
}

export default function ProductReviewList({ reviewList }: ProductReviewListProps) {
  return (
    <div>
      {reviewList.map((review) => (
        <ProductReviewItem key={review.id} userReview={review} />
      ))}
    </div>
  );
}
