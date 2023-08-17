import type { Meta, StoryObj } from '@storybook/react';
import GuestOrderSearchForm from '.';

const meta: Meta<typeof GuestOrderSearchForm> = { component: GuestOrderSearchForm };

export default meta;

type Story = StoryObj<typeof GuestOrderSearchForm>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    errorMessage: '존재하지 않는 주문입니다.',
  },
};
