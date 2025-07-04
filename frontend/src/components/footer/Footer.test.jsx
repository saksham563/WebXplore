import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer/Footer.jsx';
import { MemoryRouter } from 'react-router-dom'; // For routing context

describe('Footer Component', () => {
  test('renders footer with logo', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const logo = screen.getByAltText(/logo/i); // Adjust if you have a different alt text
    expect(logo).toBeInTheDocument();
  });

  test('renders correct navigation links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const contactLink = screen.getByText(/Contact Us/i);
    const aboutLink = screen.getByText(/About Us/i);
    const termsLink = screen.getByText(/Terms & Conditions/i);
    const privacyLink = screen.getByText(/Privacy Policy/i);
    const socialIcons = screen.getAllByRole('link');

    expect(contactLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
    expect(privacyLink).toBeInTheDocument();
    expect(socialIcons.length).toBeGreaterThan(0); // Check if there are social icons
  });

  test('renders footer copyright message', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const copyrightText = screen.getByText(/WebXplore Studio - All Rights Reserved/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
