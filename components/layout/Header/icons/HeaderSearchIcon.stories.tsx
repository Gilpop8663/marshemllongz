import type { Meta, StoryObj } from '@storybook/react';
import HeaderSearchIcon from './HeaderSearchIcon';

const meta: Meta<typeof HeaderSearchIcon> = { component: HeaderSearchIcon };

export default meta;

type Story = StoryObj<typeof HeaderSearchIcon>;

export const Default: Story = {
  args: {
    size: 6,
  },
};
