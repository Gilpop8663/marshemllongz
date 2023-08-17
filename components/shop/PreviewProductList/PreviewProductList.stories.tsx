import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_PREVIEW_PRODUCT_LIST } from '@constants/mock/productList';
import PreviewProductList from '.';

const meta: Meta<typeof PreviewProductList> = { component: PreviewProductList };

export default meta;

type Story = StoryObj<typeof PreviewProductList>;

export const Default: Story = {
  args: {
    title: 'BEST',
    products: MOCK_PREVIEW_PRODUCT_LIST,
    visibleMoreButtonCount: 7,
  },
};
