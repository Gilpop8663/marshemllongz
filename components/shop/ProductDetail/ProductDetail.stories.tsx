import type { Meta, StoryObj } from '@storybook/react';
import {
  MOCK_PRODUCT_CART,
  MOCK_PRODUCT_DETAIL,
  MOCK_RECOMMENDED_PRODUCT_LIST,
} from '@constants/mockData';
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
