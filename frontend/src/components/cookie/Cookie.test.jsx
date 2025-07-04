import { render, screen, fireEvent } from '@testing-library/react';
import Cookie from '../cookie/Cookie.jsx';
import '@testing-library/jest-dom';
// import { ThemeProvider } from 'your-theme-context-path';


  

describe('Cookie Component', () => {
  beforeEach(() => {
    // Clear cookies before each test to ensure consistency
    document.cookie = 'userCookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  });

  it('should not display the cookie consent bar if consent has been given', () => {
    // Set consent cookie
    document.cookie = 'userCookieConsent=true'; 
    
    render(<Cookie />);
    expect(screen.queryByText(/We use essential cookies to make our site work/i)).not.toBeInTheDocument();
  });

});
