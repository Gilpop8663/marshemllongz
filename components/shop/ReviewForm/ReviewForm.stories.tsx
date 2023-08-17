import type { Meta, StoryObj } from '@storybook/react';
import ReviewForm from '.';

const meta: Meta<typeof ReviewForm> = { component: ReviewForm };

export default meta;

type Story = StoryObj<typeof ReviewForm>;

export const OrderedByUser: Story = {
  args: {
    orderStatus: 'orderedByUser',
  },
};

export const NotOrderedByUser: Story = {
  args: {
    orderStatus: 'notOrderedByUser',
  },
};

export const Guest: Story = {
  args: {
    orderStatus: 'guest',
  },
};
