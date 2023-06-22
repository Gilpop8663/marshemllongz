import type { Meta, StoryObj } from '@storybook/react';
import HeaderMobileMenu from './HeaderMobileMenu';

const meta: Meta<typeof HeaderMobileMenu> = { component: HeaderMobileMenu };

export default meta;

type Story = StoryObj<typeof HeaderMobileMenu>;

export const Default: Story = {
  args: {},
};
