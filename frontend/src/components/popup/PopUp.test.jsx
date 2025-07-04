// PopUp.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import PopUp from './PopUp';

describe('PopUp Component', () => {
  beforeEach(() => {
    render(<PopUp />);
  });

  it('should render the modal', () => {
    const heading = screen.getByText(/let's grow together!/i);
    expect(heading).toBeInTheDocument();
  });

  it('should show validation errors when form is submitted empty', async () => {
    const submitButton = screen.getByRole('button', { name: /submit now/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/phone number is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/requirements must be at least 20 characters long/i)).toBeInTheDocument();
  });

  it('should accept valid form inputs', async () => {
    const nameInput = screen.getByPlaceholderText(/enter your name/i);
    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const phoneInput = screen.getByPlaceholderText(/enter your phone number/i);
    const requirementsInput = screen.getByPlaceholderText(/minimum 50 characters/i);
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(requirementsInput, { target: { value: 'Need help with my project.' } });

    const submitButton = screen.getByRole('button', { name: /submit now/i });
    fireEvent.click(submitButton);

    // Check if no error messages are displayed
    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/phone number is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/requirements must be at least 20 characters long/i)).not.toBeInTheDocument();
  });
});
