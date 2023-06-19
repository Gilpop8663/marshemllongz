import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_REVIEW_LIST } from '@constants/mockData';
import ProductReviewImage from './ProductReviewImage';

const meta: Meta<typeof ProductReviewImage> = { component: ProductReviewImage };

export default meta;

type Story = StoryObj<typeof ProductReviewImage>;

export const Default: Story = {
  args: {
    isActive: false,
    imageList: MOCK_REVIEW_LIST[0].imageList,
  },
};
