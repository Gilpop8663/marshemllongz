import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_CART_LIST } from '@constants/mock/cartList';
import CartItem from './CartItem';

const meta: Meta<typeof CartItem> = { component: CartItem };

export default meta;

type Story = StoryObj<typeof CartItem>;

export const BestProduct: Story = {
  args: {
    cart: MOCK_CART_LIST[0],
  },
};
