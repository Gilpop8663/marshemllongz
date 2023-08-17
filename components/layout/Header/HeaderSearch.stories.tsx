import type { Meta, StoryObj } from '@storybook/react';
import HeaderSearch from './HeaderSearch';

const meta: Meta<typeof HeaderSearch> = { component: HeaderSearch };

export default meta;

type Story = StoryObj<typeof HeaderSearch>;

export const Default: Story = {
  args: {
    isSearchActive: false,
  },
};

export const SearchMode: Story = {
  args: {
    isSearchActive: true,
  },
};
