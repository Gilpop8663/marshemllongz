import type { Meta, StoryObj } from '@storybook/react';
import ProductItem from './ProductItem';

const meta: Meta<typeof ProductItem> = { component: ProductItem };

export default meta;

type Story = StoryObj<typeof ProductItem>;

export const BestProduct: Story = {
  args: {
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1683746792239-6ce8cdd3ac78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    hoverImageUrl:
      'https://plus.unsplash.com/premium_photo-1686314406088-f25c0cf842ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80',
    title: '마시멜롱 실리콘 6종',
    price: 11500,
    category: 'best',
  },
};

export const DiscountProduct: Story = {
  args: {
    imageUrl:
      'https://images.unsplash.com/photo-1677429063763-45a6a49c1baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1058&q=80',
    hoverImageUrl:
      'https://images.unsplash.com/photo-1640938776314-4d303f8a1380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    title: '마시멜롱 미니 인형 맥에어 케이스',
    price: 351500,
    discountPercent: 10,
  },
};

export const NewProduct: Story = {
  args: {
    imageUrl:
      'https://images.unsplash.com/photo-1678446759480-d51a6635c532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    hoverImageUrl:
      'https://images.unsplash.com/photo-1686386084459-8d9d14400a4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    title: '[밀짚모자 증정] 마시멜롱 미니 인형 4종',
    price: 115500,
    category: 'new',
  },
};

export const DiscountProduct2: Story = {
  args: {
    imageUrl:
      'https://images.unsplash.com/photo-1678446759480-d51a6635c532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    hoverImageUrl:
      'https://images.unsplash.com/photo-1686386084459-8d9d14400a4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    title: '[밀짚모자 증정] 마시멜롱 미니 인형 4종',
    price: 2000,
    category: 'new',
    discountPercent: 10,
  },
};
