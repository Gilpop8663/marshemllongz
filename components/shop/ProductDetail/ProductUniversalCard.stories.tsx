import type { Meta, StoryObj } from '@storybook/react';
import ProductUniversalCard from './ProductUniversalCard';

const meta: Meta<typeof ProductUniversalCard> = { component: ProductUniversalCard };

export default meta;

type Story = StoryObj<typeof ProductUniversalCard>;

export const Quantity: Story = {
  args: {
    title: '주문 수량',
    content: '1개',
  },
};

export const DeliveryFee: Story = {
  args: {
    title: '배송비',
    content: '3,000원 (50,000원 이상 구매 시 무료) 제주 및 도서 산간 2,000원 추가',
  },
};
