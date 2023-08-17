import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_REVIEW_LIST } from '@constants/mock/review';
import ProductReviewItem from './ProductReviewItem';

const meta: Meta<typeof ProductReviewItem> = { component: ProductReviewItem };

export default meta;

type Story = StoryObj<typeof ProductReviewItem>;

export const Default: Story = {
  args: {
    userReview: MOCK_REVIEW_LIST[0],
  },
};
