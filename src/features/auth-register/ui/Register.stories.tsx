import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect, fn } from '@storybook/test';
import { RegisterForm } from './RegisterForm';

const meta: Meta<typeof RegisterForm> = {
  title: 'Features/Email Auth/Register',
  component: RegisterForm,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};

export const AutomatedRegistration: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Mock global fetch for the story interaction
    window.fetch = fn().mockImplementation(() =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ ok: true }), 1000)
      )
    );

    // Fill out the form
    await userEvent.type(canvas.getByLabelText(/Full Name/i), 'Jane Doe', { delay: 50 });
    await userEvent.type(canvas.getByLabelText(/Email/i), 'jane@example.com', { delay: 50 });

    // Using regex ^Password$ to specifically target the main password field
    await userEvent.type(canvas.getByLabelText(/^Password$/i), 'StrongPassword123!', { delay: 50 });
    await userEvent.type(canvas.getByLabelText(/Confirm/i), 'StrongPassword123!', { delay: 50 });

    const submitBtn = canvas.getByRole('button', { name: /Initialize Account/i });

    // Submit the form
    await userEvent.click(submitBtn);

    // Verify loading state
    // Note: The text changes to "Processing..." based on your RegisterForm logic
    await expect(canvas.getByText(/Syncing.../i)).toBeInTheDocument();
    await expect(submitBtn).toBeDisabled();
  },
};

export const ValidationErrors: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const submitBtn = canvas.getByRole('button', { name: /Initialize Account/i });

    // Click without filling anything to trigger Zod validation
    await userEvent.click(submitBtn);

    // Check for specific error messages (assuming standard Zod/Hook Form behavior)
    // These should match your registerSchema requirements
    await expect(await canvas.findByText(/invalid email address/i)).toBeInTheDocument();
  }
}