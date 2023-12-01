import type { Meta, StoryObj } from '@storybook/react';
import HeaderMobileCategory from './HeaderMobileCategory';

const meta: Meta<typeof HeaderMobileCategory> = { component: HeaderMobileCategory };

export default meta;

type Story = StoryObj<typeof HeaderMobileCategory>;

export const SHOP: Story = {
  args: {
    title: 'SHOP',
    categories: [
      '노트북/태블릿 파우치',
      '토이/인형',
      '키링',
      '스티커',
      '슬리퍼',
      '여행, 패키지',
      '패브릭/생활',
      'ALL',
    ],
    initialActive: true,
  },
};

export const COMMUNITY: Story = {
  args: {
    title: 'COMMUNITY',
    categories: ['공지사항', '언론보도', 'Q&A', '배경화면', '베스트리뷰어'],
    initialActive: true,
  },
};

export const ABOUT: Story = {
  args: {
    title: 'ABOUT',
    categories: ['브랜드', '캐릭터', '콜라보레이션', 'Contact'],
    initialActive: true,
  },
};
