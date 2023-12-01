import type { Meta, StoryObj } from '@storybook/react';
import ProductForm from '.';

const meta: Meta<typeof ProductForm> = { component: ProductForm };

export default meta;

type Story = StoryObj<typeof ProductForm>;

export const Default: Story = {
  args: {},
};
