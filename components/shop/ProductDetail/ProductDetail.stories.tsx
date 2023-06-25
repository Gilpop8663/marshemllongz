import type { Meta, StoryObj } from '@storybook/react';

import { MOCK_PRODUCT_DETAIL } from '@constants/mock/productDetail';
import { MOCK_RECOMMENDED_PRODUCT_LIST } from '@constants/mock/productRecommend';
import ProductDetail from '.';

const meta: Meta<typeof ProductDetail> = { component: ProductDetail };

export default meta;

type Story = StoryObj<typeof ProductDetail>;

export const SizeOptions: Story = {
  args: {
    productDetail: MOCK_PRODUCT_DETAIL,
    recommendedProductList: MOCK_RECOMMENDED_PRODUCT_LIST,
  },
};

export const DesignOptions: Story = {
  args: {
    productDetail: { ...MOCK_PRODUCT_DETAIL, optionKind: 'design' },
    recommendedProductList: MOCK_RECOMMENDED_PRODUCT_LIST,
  },
};

export const NoSize: Story = {
  args: {
    productDetail: { ...MOCK_PRODUCT_DETAIL, options: [] },
    recommendedProductList: MOCK_RECOMMENDED_PRODUCT_LIST,
  },
};

export const Discount: Story = {
  args: {
    productDetail: { ...MOCK_PRODUCT_DETAIL, discountPercent: 10 },
    recommendedProductList: MOCK_RECOMMENDED_PRODUCT_LIST,
  },
};
