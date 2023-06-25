import { getPercentageNumber } from '@utils/common';

interface GetPageRangeParams {
  totalPages: number;
  currentPage: number;
}

export const getPageRange = ({ currentPage, totalPages }: GetPageRangeParams) => {
  const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);

  return [startPage, endPage];
};

interface GetDiscountedPriceParams {
  discountPercent: number | undefined;
  price: number;
}

export const getDiscountedPrice = ({ discountPercent, price }: GetDiscountedPriceParams) => {
  if (!discountPercent) return null;

  const discountPrice = getPercentageNumber({ total: price, percent: discountPercent });

  if (!discountPrice) return null;

  const discountedPrice = price - Math.round(discountPrice);

  return discountedPrice;
};
