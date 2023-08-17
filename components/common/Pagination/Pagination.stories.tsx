import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '.';

const meta: Meta<typeof Pagination> = { component: Pagination };

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalPages: 13,
    currentPage: 6,
  },
};
