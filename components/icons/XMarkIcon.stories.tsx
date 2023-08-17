import type { Meta, StoryObj } from '@storybook/react';
import XMarkIcon from './XMarkIcon';

const meta: Meta<typeof XMarkIcon> = { component: XMarkIcon };

export default meta;

type Story = StoryObj<typeof XMarkIcon>;

export const Default: Story = {
  args: {
    size: 6,
  },
};
