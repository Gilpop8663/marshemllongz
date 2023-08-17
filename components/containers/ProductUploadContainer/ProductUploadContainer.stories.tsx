import type { Meta, StoryObj } from '@storybook/react';
import ProductUploadContainer from '.';

const meta: Meta<typeof ProductUploadContainer> = { component: ProductUploadContainer };

export default meta;

type Story = StoryObj<typeof ProductUploadContainer>;

export const Default: Story = {
  args: {},
};
