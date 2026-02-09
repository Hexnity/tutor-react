import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Login } from './Login';


describe('Login Page', () => {

    it('renders the login form correctly', () => {
        render(<Login />);

        const heading = screen.getByRole('heading', { level: 1, name: /Continue Your/i });
        expect(heading).toBeInTheDocument();

        expect(screen.getByText(/Student Login/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();

        expect(screen.getByRole('link', { name: /Register/i })).toBeInTheDocument();
    });

    it('allows typing in the email and password fields', async () => {
        const user = userEvent.setup();

        render(<Login />);
        const emailInput = screen.getByLabelText(/Email Address/i);
        const passwordInput = screen.getByLabelText(/Password/i);

        await user.type(emailInput, 'test@example.com');
        await user.type(passwordInput, 'password123');

        expect(emailInput).toHaveValue('test@example.com');
        expect(passwordInput).toHaveValue('password123');
    });
});
