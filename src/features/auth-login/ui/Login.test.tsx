import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, describe, vi } from "vitest";
import { LoginForm } from "./LoginForm";

// mock global fetch for API call 
(globalThis as any).fetch = vi.fn();

describe("Login Page Integration", () => {
  test("shows error message with invalid email", async () => {
    const user = userEvent.setup();
    const handleSuccess = vi.fn();
    render(<LoginForm onSuccess={handleSuccess}/>);

    //find input labels (accessibility first approach)
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/^password$/i);
    const submitButton = screen.getByRole('button', { name: /access account/i });

    //simulate user interaction with invalid email
    await user.type(emailInput, 'invalid-email');
    await user.type(passwordInput, 'password123');

    //trigger validation
    await user.click(submitButton);

    //verify validation error
    const error = await screen.findByText(/invalid email address/i);
    expect(error).toBeInTheDocument();
  });

  test("shows error message with short password", async () => {
    const user = userEvent.setup();
    const handleSuccess = vi.fn();
    render(<LoginForm onSuccess={handleSuccess}/>);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/^password$/i);
    const submitButton = screen.getByRole('button', { name: /access account/i });

    //simulate user interaction with short password
    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, '123');

    //trigger validation
    await user.click(submitButton);

    //verify validation error
    const error = await screen.findByText(/password must be at least 8 characters/i);
    expect(error).toBeInTheDocument();
  });

  test("submits form successfully with valid data", async () => {
    const user = userEvent.setup();
    const handleSuccess = vi.fn();
    (fetch as any).mockResolvedValue({ ok: true });

    render(<LoginForm onSuccess={handleSuccess}/>);

    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/^password$/i), 'password123');

    await user.click(screen.getByRole('button', { name: /access account/i }));

    //verify API call
    expect(fetch).toHaveBeenCalledWith('/api/auth/login', expect.any(Object));
  });
});
