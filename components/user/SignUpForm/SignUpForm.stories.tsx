import type { Meta, StoryObj } from '@storybook/react';
import SignUpForm from '.';

const meta: Meta<typeof SignUpForm> = { component: SignUpForm };

export default meta;

type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {
  args: {},
};
