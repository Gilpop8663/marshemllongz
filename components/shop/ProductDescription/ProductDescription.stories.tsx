import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_PRODUCT_CART } from '@constants/mock/productCart';
import ProductDescription from '.';

const meta: Meta<typeof ProductDescription> = { component: ProductDescription };

export default meta;

type Story = StoryObj<typeof ProductDescription>;

export const Default: Story = {
  args: {
    reviewListCount: 348,
  },
};
