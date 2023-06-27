import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from '.';

const meta: Meta<typeof CheckBox> = { component: CheckBox };

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    text: '모두 동의합니다.',
  },
};

export const Description: Story = {
  args: {
    text: '(필수) 만 14세 이상입니다.',
    description: '만 19세 미만의 미성년자가 결제 시 법정대리인이 거래를 취소할 수 있습니다.',
  },
};
