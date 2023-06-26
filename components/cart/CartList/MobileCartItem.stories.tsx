import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_CART_LIST } from '@constants/mock/cartList';
import MobileCartItem from './MobileCartItem';

const meta: Meta<typeof MobileCartItem> = { component: MobileCartItem };

export default meta;

type Story = StoryObj<typeof MobileCartItem>;

export const Default: Story = {
  args: {
    cart: MOCK_CART_LIST[0],
  },
};
