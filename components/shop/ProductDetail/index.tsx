import React from 'react';
import Image from 'next/image';
import Button from '@components/common/Button';
import Select from '@components/common/Select';
import { getFormattedPrice } from '@utils/common';
import { getDiscountedPrice } from '@utils/shop/common';
import { ProductItem, RecommendedProduct } from '@type/productType';
import ProductRating from '../ProductRating';
import RecommendedProductList from '../RecommendedProductList';
import ProductCartItem from './ProductCartItem';
import ProductImageList from './ProductImageList';
import ProductUniversalCard from './ProductUniversalCard';

interface ProductDetailProps {
  productDetail: ProductItem;
  recommendedProductList: RecommendedProduct[];
}

export default function ProductDetail({
  productDetail,
  recommendedProductList,
}: ProductDetailProps) {
  const {
    id,
    imageList,
    rating,
    price,
    reviews,
    optionKind,
    options,
    stock,
    title,
    discountPercent,
  } = productDetail;

  const discountedPrice = getDiscountedPrice({ discountPercent, price });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-primaryBlack">
      <div className="flex flex-col w-full">
        <div className="relative w-full aspect-square">
          <Image src={imageList[0].url} alt={imageList[0].name} fill />
        </div>
        <div className="flex justify-center mt-2">
          <ProductImageList imageList={imageList} />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h5 className="text-2xl font-medium mb-2">{title}</h5>
        <div className="flex items-center">
          <ProductRating rating={rating} />
          {reviews.length > 0 && <span className="text-xs ml-1">({reviews.length}개 후기)</span>}
        </div>
        <span className="text-lg text-darkGray my-12">{getFormattedPrice(price)}원</span>
        <div className="flex flex-col gap-3 mb-8">
          <ProductUniversalCard title="적립금" content="7%" />
          <ProductUniversalCard
            title="배송비"
            content="3,000원 (50,000원 이상 구매 시 무료)
          제주 및 도서 산간 2,000원 추가 "
          />
        </div>
        {options.length > 0 && (
          <Select
            title={optionKind === 'design' ? '디자인' : '사이즈'}
            selectedItemLabel={options[0].label}
            handleOptionChange={() => {}}
            optionItems={options}
          />
        )}
        <div className="border-b-[1px] border-primaryBlack py-6">
          <RecommendedProductList recommendedProductList={recommendedProductList} />
        </div>
        <div className="border-b-[1px] border-primaryBlack py-12">
          {options.length === 0 && (
            <ProductCartItem product={{ price, quantity: 1, title, id, stock }} />
          )}
        </div>
        <div className="flex flex-col gap-3 mt-8">
          <ProductUniversalCard title="주문 수량" content="0개" />
          <ProductUniversalCard title="총 상품 금액" content="0원" />
        </div>
        <div className="flex py-12 gap-6">
          <Button text="구매하기" color="black" />
          <Button text="장바구니에 담기" color="white" />
        </div>
      </div>
    </div>
  );
}
