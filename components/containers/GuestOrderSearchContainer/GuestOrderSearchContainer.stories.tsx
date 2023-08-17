import type { Meta, StoryObj } from '@storybook/react';
import GuestOrderSearchContainer from '.';

const meta: Meta<typeof GuestOrderSearchContainer> = { component: GuestOrderSearchContainer };

export default meta;

type Story = StoryObj<typeof GuestOrderSearchContainer>;

export const Default: Story = {
  args: {},
};
