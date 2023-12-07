import type { Meta, StoryObj } from '@storybook/react';
import CategoryRegisterForm from '.';

const meta: Meta<typeof CategoryRegisterForm> = { component: CategoryRegisterForm };

export default meta;

type Story = StoryObj<typeof CategoryRegisterForm>;

export const RegisterCategory: Story = {
  args: {
    kind: 'register',
  },
};

export const EditCategory: Story = {
  args: {
    kind: 'edit',
  },
};
