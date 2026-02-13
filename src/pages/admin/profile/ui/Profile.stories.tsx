import type { Meta, StoryObj } from '@storybook/react';
import { Profile } from './Profile';

const meta: Meta<typeof Profile> = {
    title: 'Pages/Admin/Profile',
    component: Profile,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {};

export const CustomTitle: Story = {
    args: {
        title: "My Custom Profile"
    }
};
