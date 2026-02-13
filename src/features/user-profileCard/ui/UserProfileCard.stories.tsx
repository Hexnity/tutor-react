import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileCard } from './UserProfileCard';

const meta: Meta<typeof UserProfileCard> = {
    title: 'Features/Profile/UserProfileCard',
    component: UserProfileCard,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof UserProfileCard>;

export const Default: Story = {};
