import type { Meta, StoryObj } from '@storybook/react';
import Input from '../Input';
import Label from '.';

const meta: Meta<typeof Label> = { component: Label };

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    label: '비밀번호',
    isRequired: true,
    children: <Input type="password" id="password" />,
  },
};
