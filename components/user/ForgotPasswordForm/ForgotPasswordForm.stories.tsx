import type { Meta, StoryObj } from '@storybook/react';
import ForgotPasswordForm from '.';

const meta: Meta<typeof ForgotPasswordForm> = { component: ForgotPasswordForm };

export default meta;

type Story = StoryObj<typeof ForgotPasswordForm>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    errorMessage: '입력하신 정보와 일치하는 회원이 없습니다.',
  },
};
