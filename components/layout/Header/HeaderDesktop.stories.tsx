import type { Meta, StoryObj } from '@storybook/react';
import HeaderDesktop from './HeaderDesktop';

const meta: Meta<typeof HeaderDesktop> = { component: HeaderDesktop };

export default meta;

type Story = StoryObj<typeof HeaderDesktop>;

export const Default: Story = {
  args: {
    cartQuantity: 12,
  },
};
