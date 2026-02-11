import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, describe, vi } from "vitest";
import { RegisterForm } from "./RegisterForm";

// mock global fetch for API call 
global.fetch = vi.fn();

describe("Register Page Integration", () => {
  test("shows error message when passwords do not match", async () => {
    const user = userEvent.setup();
    const handleSuccess = vi.fn();
    render(<RegisterForm onSuccess={handleSuccess} />);
    
    //find input labels (accessibility first approach)
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/^password$/i);
    const confirmInput = screen.getByLabelText(/confirm/i);
    const submitButton = screen.getByRole('button', { name: /initialize account/i });
    
    //simulate user interaction with mismatched passwords
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(passwordInput, 'password123');
    await user.type(confirmInput, 'wrongpass');
    
    //trigger validation
    await user.click(submitButton);
    
    //verify validation error
    const error = await screen.findByText(/passwords don't match/i);
    expect(error).toBeInTheDocument();
  });

  test("submits form successfully with valid data", async () => {
    const user = userEvent.setup();
    (fetch as any).mockResolvedValue({ ok: true });
    const handleSuccess = vi.fn();
    render(<RegisterForm onSuccess={handleSuccess} />);
    
    await user.type(screen.getByLabelText(/full name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/^password$/i), 'Password123!');
    await user.type(screen.getByLabelText(/confirm/i), 'Password123!');
    
    await user.click(screen.getByRole('button', { name: /initialize account/i }));

    //verify API call
    expect(fetch).toHaveBeenCalledWith('/api/auth/register', expect.any(Object));
    //verify success callback
    expect(handleSuccess).toHaveBeenCalled();
  });
});