import type { Meta, StoryObj } from '@storybook/react';
import ProductContent from '.';

const meta: Meta<typeof ProductContent> = { component: ProductContent };

export default meta;

type Story = StoryObj<typeof ProductContent>;

export const Default: Story = {
  args: {
    contentList: [
      '안녕하세요 제 떡볶이를 먹으려고 하는데, 어떤 사진이 좋을까요?\n\n\n',
      'https://source.unsplash.com/600x400/?nature,water&sig=1',
      '이 사진과, ',
      'https://source.unsplash.com/600x400/?nature,water&sig=1',
      '이 사진 중 어떤 떡볶이가 맛있을까요? ',
    ],
  },
};
