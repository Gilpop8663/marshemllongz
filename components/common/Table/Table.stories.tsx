import type { Meta, StoryObj } from '@storybook/react';
import Table from '.';

const meta: Meta<typeof Table> = { component: Table };

export default meta;

type Example = 'name' | 'userStatus' | 'paymentStatus' | 'amount';

type Story = StoryObj<typeof Table<Example>>;

export const Primary: Story = {
  args: {
    labelList: [
      {
        label: 'NAME',
        value: 'name',
        gridFractionalUnit: 1,
      },
      {
        label: 'USER STATUS',
        value: 'userStatus',
        gridFractionalUnit: 3,
      },
      {
        label: 'PAYMENT STATUS',
        value: 'paymentStatus',
        gridFractionalUnit: 6,
      },
      {
        label: 'AMOUNT',
        value: 'amount',
        gridFractionalUnit: 2,
      },
    ],
    itemList: [
      {
        name: '저스틴',
        userStatus: '액티브',
        paymentStatus: '결제 완료',
        amount: '200$',
      },
      {
        name: '밀란',
        userStatus: '비활성화',
        paymentStatus: '결제 전',
        amount: 1000,
      },
      {
        name: '제임',
        userStatus: '비활성화',
        paymentStatus: <button>안녕</button>,
        amount: 1000,
      },
    ],
  },
};
