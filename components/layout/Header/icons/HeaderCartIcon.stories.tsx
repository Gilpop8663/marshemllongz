import type { Meta, StoryObj } from '@storybook/react';
import HeaderCartIcon from './HeaderCartIcon';

const meta: Meta<typeof HeaderCartIcon> = { component: HeaderCartIcon };

export default meta;

type Story = StoryObj<typeof HeaderCartIcon>;

export const Default: Story = {
  args: {
    size: 6,
  },
};
