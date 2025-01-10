import type { Meta, StoryObj } from '@storybook/vue3';
import { AppNavigation } from 'vue-devkit';


const meta = {
  title: 'AppNavigation',
  component: AppNavigation,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
  },
  args: {
    id: "1",
  },
} satisfies Meta<typeof AppNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    id: '2',
  },
};

