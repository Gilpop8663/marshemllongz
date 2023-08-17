import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_CART_LIST } from '@constants/mock/cartList';
import CartOrderSummary from '.';

const meta: Meta<typeof CartOrderSummary> = { component: CartOrderSummary };

export default meta;

type Story = StoryObj<typeof CartOrderSummary>;

export const Default: Story = {
  args: {
    totalPrice: Math.floor(Math.random() * 100000),
    deliveryFee: 3000,
  },
};

export const FreeDeliveryFee: Story = {
  args: {
    totalPrice: Math.floor(Math.random() * 100000),
    deliveryFee: 0,
  },
};
