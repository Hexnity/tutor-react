import type { Meta, StoryObj } from '@storybook/react';
import { LoginPage as Login } from '@/pages/auth/login';

const meta: Meta<typeof Login> = {
    title: 'Pages/Login',
    component: Login,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Default: Story = {};
