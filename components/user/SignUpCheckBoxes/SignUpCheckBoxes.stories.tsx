import type { Meta, StoryObj } from '@storybook/react';
import SignUpCheckBoxes from '.';

const meta: Meta<typeof SignUpCheckBoxes> = { component: SignUpCheckBoxes };

export default meta;

type Story = StoryObj<typeof SignUpCheckBoxes>;

export const Default: Story = {
  args: {},
};
