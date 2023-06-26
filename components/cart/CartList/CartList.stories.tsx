import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_CART_LIST } from '@constants/mock/cartList';
import CartList from '.';

const meta: Meta<typeof CartList> = { component: CartList };

export default meta;

type Story = StoryObj<typeof CartList>;

export const Default: Story = {
  args: {
    cartItems: MOCK_CART_LIST,
  },
};
