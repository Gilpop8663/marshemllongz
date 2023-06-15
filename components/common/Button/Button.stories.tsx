import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = { component: Button };

export default meta;

type Story = StoryObj<typeof Button>;

export const WhiteButton: Story = {
  args: {
    text: '구매하기',
    color: 'white',
  },
};

export const BlackButton: Story = {
  args: {
    text: '장바구니에 담기',
    color: 'black',
  },
};
