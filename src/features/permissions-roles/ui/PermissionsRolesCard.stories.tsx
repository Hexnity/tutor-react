import type { Meta, StoryObj } from '@storybook/react';
import { PermissionsRolesCard } from './PermissionsRolesCard';

const meta: Meta<typeof PermissionsRolesCard> = {
    title: 'Features/Profile/PermissionsRolesCard',
    component: PermissionsRolesCard,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof PermissionsRolesCard>;

export const Default: Story = {};
