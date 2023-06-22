import type { Meta, StoryObj } from '@storybook/react';
import HeaderUserIcon from './HeaderUserIcon';

const meta: Meta<typeof HeaderUserIcon> = { component: HeaderUserIcon };

export default meta;

type Story = StoryObj<typeof HeaderUserIcon>;

export const Default: Story = {
  args: {
    size: 6,
  },
};
