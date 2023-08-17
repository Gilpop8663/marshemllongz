import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_REVIEW_LIST } from '@constants/mock/review';
import ProductReview from '.';

const meta: Meta<typeof ProductReview> = { component: ProductReview };

export default meta;

type Story = StoryObj<typeof ProductReview>;

export const Default: Story = {
  args: {
    score: 4.9,
    reviewList: MOCK_REVIEW_LIST,
    totalPages: 12,
  },
};

export const Empty: Story = {
  args: {
    score: 4.9,
    reviewList: [],
    totalPages: 0,
  },
};
