import type { Meta, StoryObj } from '@storybook/react';
import ProductReviewEmpty from './ProductReviewEmpty';

const meta: Meta<typeof ProductReviewEmpty> = { component: ProductReviewEmpty };

export default meta;

type Story = StoryObj<typeof ProductReviewEmpty>;

export const Default: Story = {
  args: {},
};
