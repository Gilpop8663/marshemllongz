import type { Meta, StoryObj } from '@storybook/react';
import QuantitySelector from '.';

const meta: Meta<typeof QuantitySelector> = { component: QuantitySelector };

export default meta;

type Story = StoryObj<typeof QuantitySelector>;

export const Default: Story = {
  args: {
    quantity: 1,
    ariaDecreaseLabel: `OOO 장바구니 수량 감소`,
    ariaIncreaseLabel: `OOO 장바구니 수량 증가`,
  },
};
