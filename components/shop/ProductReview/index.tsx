import React, { ChangeEvent, useState } from 'react';
import Button from '@components/common/Button';
import Pagination from '@components/common/Pagination';
import { Review } from '@type/productType';
import ProductReviewEmpty from './ProductReviewEmpty';
import ProductReviewList from './ProductReviewList';

interface ProductReviewProps {
  reviewList: Review[];
  score: number;
  totalPages: number;
}

export default function ProductReview({ totalPages, reviewList, score }: ProductReviewProps) {
  const [isPhotoReview, setIsPhotoReview] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredList = reviewList.filter(
    (review) => review.imageList && review.imageList.length > 0
  );

  const handlePhotoReviewChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    setIsPhotoReview(checked);
  };

  const userReviewList = isPhotoReview ? filteredList : reviewList;

  return (
    <div>
      <h5 className="text-sm font-medium">후기</h5>
      <div className="flex justify-between my-4 items-end">
        <div>
          {userReviewList.length > 0 && (
            <>
              <span className="text-xl font-medium">{score} / 5</span>
              <span className="text-xs ml-2">({userReviewList.length}개 후기)</span>
            </>
          )}
        </div>
        <div className="flex items-center">
          <input checked={isPhotoReview} onChange={handlePhotoReviewChange} type="checkbox" />
          <span className="text-xs ml-2">사진 후기만 보기</span>
        </div>
      </div>
      {userReviewList.length > 0 ? (
        <ProductReviewList reviewList={userReviewList} />
      ) : (
        <ProductReviewEmpty />
      )}
      <div className="flex justify-end">
        <div className="w-24  mt-6">
          <Button color="black" text="후기 쓰기" />
        </div>
      </div>
      <div className="flex self-center justify-center py-12">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
}
