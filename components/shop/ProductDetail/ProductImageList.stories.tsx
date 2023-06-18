import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_PRODUCT_DETAIL } from '@constants/mockData';
import ProductImageList from './ProductImageList';

const meta: Meta<typeof ProductImageList> = { component: ProductImageList };

export default meta;

type Story = StoryObj<typeof ProductImageList>;

export const Default: Story = {
  args: {
    imageList: MOCK_PRODUCT_DETAIL.imageList,
  },
};
