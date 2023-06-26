import type { Meta, StoryObj } from '@storybook/react';
import CartOrderCard from './CartOrderCard';

const meta: Meta<typeof CartOrderCard> = { component: CartOrderCard };

export default meta;

type Story = StoryObj<typeof CartOrderCard>;

export const Default: Story = {
  args: {
    label: '상품 합계',
    value: '20,000원',
  },
};
