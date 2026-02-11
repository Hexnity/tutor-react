import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect, fn } from '@storybook/test';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Features/Email Auth/Login',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};

export const AutomatedLogin: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Mock global fetch for the story interaction
    window.fetch = fn().mockImplementation(() =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ ok: true }), 1000)
      )
    );

    // Fill out the form
    await userEvent.type(canvas.getByLabelText(/Email/i), 'student@example.com', { delay: 50 });
    await userEvent.type(canvas.getByLabelText(/^Password$/i), 'password123', { delay: 50 });

    const submitBtn = canvas.getByRole('button', { name: /Access Account/i });

    // Submit the form
    await userEvent.click(submitBtn);

    // Verify loading state
    // Note: The text changes to "Authenticating..." based on your LoginForm logic
    await expect(canvas.getByText(/Authenticating.../i)).toBeInTheDocument();
    await expect(submitBtn).toBeDisabled();
  },
};

export const ValidationErrors: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const submitBtn = canvas.getByRole('button', { name: /Access Account/i });

    // Click without filling anything to trigger Zod validation
    await userEvent.click(submitBtn);

    // Check for specific error messages (assuming standard Zod/Hook Form behavior)
    // These should match your loginSchema requirements
    await expect(await canvas.findByText(/invalid email address/i)).toBeInTheDocument();
  }
}
