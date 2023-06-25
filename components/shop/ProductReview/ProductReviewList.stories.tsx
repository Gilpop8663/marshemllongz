import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_REVIEW_LIST } from '@constants/mock/review';
import ProductReviewList from './ProductReviewList';

const meta: Meta<typeof ProductReviewList> = { component: ProductReviewList };

export default meta;

type Story = StoryObj<typeof ProductReviewList>;

export const Default: Story = {
  args: {
    reviewList: MOCK_REVIEW_LIST,
  },
};
