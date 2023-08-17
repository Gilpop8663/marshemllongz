import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_CART_LIST } from '@constants/mock/cartList';
import DesktopCartItem from './DesktopCartItem';

const meta: Meta<typeof DesktopCartItem> = { component: DesktopCartItem };

export default meta;

type Story = StoryObj<typeof DesktopCartItem>;

export const Default: Story = {
  args: {
    cart: MOCK_CART_LIST[0],
  },
};
