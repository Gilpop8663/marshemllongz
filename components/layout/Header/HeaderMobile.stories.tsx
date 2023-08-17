import type { Meta, StoryObj } from '@storybook/react';
import HeaderMobile from './HeaderMobile';

const meta: Meta<typeof HeaderMobile> = { component: HeaderMobile };

export default meta;

type Story = StoryObj<typeof HeaderMobile>;

export const Default: Story = {
  args: {
    cartQuantity: 12,
  },
};
