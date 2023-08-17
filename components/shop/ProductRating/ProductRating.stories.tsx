import type { Meta, StoryObj } from '@storybook/react';
import ProductRating from '.';

const meta: Meta<typeof ProductRating> = { component: ProductRating };

export default meta;

type Story = StoryObj<typeof ProductRating>;

export const Default: Story = {
  args: {
    rating: 3,
  },
};
