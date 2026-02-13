import type { Meta, StoryObj } from '@storybook/react';
import { RecentActivityCard } from './RecentActivityCard';

const meta: Meta<typeof RecentActivityCard> = {
    title: 'Features/Profile/RecentActivityCard',
    component: RecentActivityCard,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof RecentActivityCard>;

export const Default: Story = {};
