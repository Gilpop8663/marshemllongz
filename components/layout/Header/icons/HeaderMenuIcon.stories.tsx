import type { Meta, StoryObj } from '@storybook/react';
import HeaderMenuIcon from './HeaderMenuIcon';

const meta: Meta<typeof HeaderMenuIcon> = { component: HeaderMenuIcon };

export default meta;

type Story = StoryObj<typeof HeaderMenuIcon>;

export const Default: Story = {
  args: {
    size: 6,
  },
};
