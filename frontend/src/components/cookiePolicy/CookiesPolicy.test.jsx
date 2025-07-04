// CookiesPolicy.test.jsx
import { render, screen } from '@testing-library/react';
import CookiesPolicy from '../cookiePolicy/CookiesPolicy.jsx';
import '@testing-library/jest-dom';

describe('CookiesPolicy Component', () => {
  test('renders Cookies Policy title', () => {
    render(<CookiesPolicy />);
    
    // Check if the title is present
    expect(screen.getByText('Cookies Policy')).toBeInTheDocument();
  });

  test('displays all section headings', () => {
    render(<CookiesPolicy />);

    // Check for all main section headings
    expect(screen.getByText('1. What Are Cookies?')).toBeInTheDocument();
    expect(screen.getByText('2. How We Use Cookies')).toBeInTheDocument();
    expect(screen.getByText('3. Third-Party Cookies')).toBeInTheDocument();
    expect(screen.getByText('4. Managing Cookies')).toBeInTheDocument();
    expect(screen.getByText('5. Changes to This Policy')).toBeInTheDocument();
  });

  test('displays the last updated date', () => {
    render(<CookiesPolicy />);
    
    // Check for the "Last updated" date
    expect(screen.getByText(/Last updated: September 30, 2024/i)).toBeInTheDocument();
  });
});
