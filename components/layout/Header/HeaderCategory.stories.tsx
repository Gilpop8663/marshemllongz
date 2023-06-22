import type { Meta, StoryObj } from '@storybook/react';
import HeaderCategory from './HeaderCategory';

const meta: Meta<typeof HeaderCategory> = { component: HeaderCategory };

export default meta;

type Story = StoryObj<typeof HeaderCategory>;

export const SHOP: Story = {
  args: {
    title: 'SHOP',
    category: [
      '노트북/태블릿 파우치',
      '토이/인형',
      '키링',
      '스티커',
      '슬리퍼',
      '여행, 패키지',
      '패브릭/생활',
      'ALL',
    ],
  },
};

export const COMMUNITY: Story = {
  args: {
    title: 'COMMUNITY',
    category: ['공지사항', '언론보도', 'Q&A', '배경화면', '베스트리뷰어'],
  },
};

export const ABOUT: Story = {
  args: {
    title: 'ABOUT',
    category: ['브랜드', '캐릭터', '콜라보레이션', 'Contact'],
  },
};
