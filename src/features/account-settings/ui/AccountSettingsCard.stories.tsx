import type { Meta, StoryObj } from '@storybook/react';
import { AccountSettingsCard } from './AccountSettingsCard';

const meta: Meta<typeof AccountSettingsCard> = {
    title: 'Features/Profile/AccountSettingsCard',
    component: AccountSettingsCard,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof AccountSettingsCard>;

export const Default: Story = {};
