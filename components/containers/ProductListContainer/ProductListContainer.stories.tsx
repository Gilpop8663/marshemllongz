import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_PREVIEW_PRODUCT_LIST } from '@constants/mock/productList';
import ProductListContainer from '.';

const meta: Meta<typeof ProductListContainer> = { component: ProductListContainer };

export default meta;

type Story = StoryObj<typeof ProductListContainer>;

export const Default: Story = {
  args: {
    bestProducts: MOCK_PREVIEW_PRODUCT_LIST,
    newProducts: MOCK_PREVIEW_PRODUCT_LIST,
  },
};
