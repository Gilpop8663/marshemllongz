import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_PRODUCT_CART } from '@constants/mock/productCart';
import ProductCartList from './ProductCartList';

const meta: Meta<typeof ProductCartList> = { component: ProductCartList };

export default meta;

type Story = StoryObj<typeof ProductCartList>;

export const Default: Story = {
  args: {
    productList: MOCK_PRODUCT_CART,
  },
};
