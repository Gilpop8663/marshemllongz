import type { Meta, StoryObj } from '@storybook/react';
import Select from '.';

const meta: Meta<typeof Select> = { component: Select };

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    title: '디자인',
    selectedItemLabel: { value: '', label: '선택하세요.', description: '' }.label,
    optionItems: [
      { value: '', label: '선택하세요.', description: '' },
      { value: 'option1', label: 'Option 1', description: '' },
      { value: 'option2', label: 'Option 2', description: '(+ 1,000원)' },
      { value: 'option3', label: 'Option 3', description: '' },
    ],
    handleOptionChange: () => {},
  },
};

export const Secondary: Story = {
  args: {
    selectedItemLabel: '디자인',
    optionItems: [
      { value: '', label: '마시멜롱즈', description: '' },
      { value: '', label: '뮤즈', description: '' },
    ],
    handleOptionChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    selectedItemLabel: '디자인',
    optionItems: [
      { value: '', label: '마시멜롱즈', description: '' },
      { value: '', label: '뮤즈', description: '' },
    ],
    handleOptionChange: () => {},
    isDisable: true,
  },
};
