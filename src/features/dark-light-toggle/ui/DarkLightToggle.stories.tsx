import type { Meta, StoryObj } from '@storybook/react';
import { DarkLightToggle } from './DarkLightToggle';
import { ThemeProvider } from '../model/theme-provider';

const meta = {
  title: 'Dashboard/DarkLightToggle',
  component: DarkLightToggle,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-8 bg-background text-foreground min-h-[200px] flex items-center justify-center">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DarkLightToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    showLabel: true,
    size: 'default',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};
