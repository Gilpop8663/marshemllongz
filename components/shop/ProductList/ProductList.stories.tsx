import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_PREVIEW_PRODUCT_LIST } from '@constants/mock/productList';
import ProductList from '.';

const meta: Meta<typeof ProductList> = { component: ProductList };

export default meta;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {
  args: {
    products: MOCK_PREVIEW_PRODUCT_LIST,
  },
};
