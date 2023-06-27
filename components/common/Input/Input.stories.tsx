import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta: Meta<typeof Input> = { component: Input };

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: 'password',
    label: '비밀번호',
    placeholder: '6자 이상 입력해주세요.',
    isRequired: true,
  },
};
