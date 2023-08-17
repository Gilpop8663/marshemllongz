import type { Meta, StoryObj } from '@storybook/react';
import QuantitySelector from '.';

const meta: Meta<typeof QuantitySelector> = { component: QuantitySelector };

export default meta;

type Story = StoryObj<typeof QuantitySelector>;

export const Default: Story = {
  args: {
    initialQuantity: 1,
    title: '마시멜롱 백팩',
    stock: 100,
  },
};
