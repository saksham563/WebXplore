import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../header/Header.jsx';
import { MemoryRouter } from 'react-router-dom'; // For routing context

describe('Header Component', () => {
  test('renders header with logo and title', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    
    const logo = screen.getByAltText(/logo/i); // Adjust alt text as needed
    const title = screen.getByText(/WebXplore Studio/i);
    
    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // const searchIcon = screen.getByRole('img', { hidden: true });
    const homeLink = screen.getByText(/Home/i);
    const servicesLink = screen.getByText(/Services/i);
    const portfolioLink = screen.getByText(/Portfolio/i);
    const caseStudyLink = screen.getByText(/Case Study/i);
    const pricingLink = screen.getByText(/Pricing/i);
    const contactLink = screen.getByText(/Contact Us/i);

    // expect(screen.queryByPlaceholderText(/search/i)).not.toBeVisible();
    expect(homeLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(portfolioLink).toBeInTheDocument();
    expect(caseStudyLink).toBeInTheDocument();
    expect(pricingLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument(); 
  });


});
