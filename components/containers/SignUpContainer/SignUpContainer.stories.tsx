import type { Meta, StoryObj } from '@storybook/react';
import SignUpContainer from '.';

const meta: Meta<typeof SignUpContainer> = { component: SignUpContainer };

export default meta;

type Story = StoryObj<typeof SignUpContainer>;

export const Default: Story = {
  args: {},
};
