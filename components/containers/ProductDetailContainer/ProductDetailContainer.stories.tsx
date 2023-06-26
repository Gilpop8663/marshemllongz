import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_PRODUCT_DETAIL } from '@constants/mock/productDetail';
import { MOCK_PREVIEW_PRODUCT_LIST } from '@constants/mock/productList';
import { MOCK_RECOMMENDED_PRODUCT_LIST } from '@constants/mock/productRecommend';
import { MOCK_REVIEW_LIST } from '@constants/mock/review';
import ProductListContainer from '.';

const meta: Meta<typeof ProductListContainer> = { component: ProductListContainer };

export default meta;

type Story = StoryObj<typeof ProductListContainer>;

export const Default: Story = {
  args: {
    productDetail: MOCK_PRODUCT_DETAIL,
    recommendedProductList: MOCK_RECOMMENDED_PRODUCT_LIST,
    reviewList: MOCK_REVIEW_LIST,
    score: 4.9,
    totalPages: 21,
  },
};
