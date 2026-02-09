import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/shared/ui/input';

const meta: Meta<typeof Input> = {
    title: 'Shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text here...',
        type: 'text',
    },
};

export const Email: Story = {
    args: {
        placeholder: 'student@example.com',
        type: 'email',
    },
};

export const Password: Story = {
    args: {
        placeholder: 'Enter password...',
        type: 'password',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled input',
        disabled: true,
    },
};
