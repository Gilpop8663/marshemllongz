import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_RECOMMENDED_PRODUCT_LIST } from '@constants/mockData';
import RecommendedProductItem from './RecommendedProductItem';

const meta: Meta<typeof RecommendedProductItem> = { component: RecommendedProductItem };

export default meta;

type Story = StoryObj<typeof RecommendedProductItem>;

export const Default: Story = {
  args: {
    recommendedProduct: MOCK_RECOMMENDED_PRODUCT_LIST[0],
  },
};
