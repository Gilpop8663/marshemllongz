import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_RECOMMENDED_PRODUCT_LIST } from '@constants/mock/productRecommend';
import RecommendedProductList from '.';

const meta: Meta<typeof RecommendedProductList> = { component: RecommendedProductList };

export default meta;

type Story = StoryObj<typeof RecommendedProductList>;

export const Default: Story = {
  args: {
    recommendedProductList: MOCK_RECOMMENDED_PRODUCT_LIST,
  },
};
