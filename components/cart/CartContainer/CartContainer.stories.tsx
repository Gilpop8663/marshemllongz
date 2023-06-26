import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_CART_LIST } from '@constants/mock/cartList';
import CartContainer from '.';

const meta: Meta<typeof CartContainer> = { component: CartContainer };

export default meta;

type Story = StoryObj<typeof CartContainer>;

export const Default: Story = {
  args: {
    cartItems: MOCK_CART_LIST,
    totalPrice: 100000,
    deliveryFee: 3000,
  },
};
