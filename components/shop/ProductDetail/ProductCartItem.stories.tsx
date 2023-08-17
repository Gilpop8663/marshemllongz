import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_PRODUCT_CART } from '@constants/mock/productCart';
import ProductCartItem from './ProductCartItem';

const meta: Meta<typeof ProductCartItem> = { component: ProductCartItem };

export default meta;

type Story = StoryObj<typeof ProductCartItem>;

export const Default: Story = {
  args: {
    product: MOCK_PRODUCT_CART[0],
  },
};
