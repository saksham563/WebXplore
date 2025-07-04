import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Services from './Services'; // Adjust the import path as necessary

describe('Services Component', () => {
  it('renders the Services component correctly', () => {
    render(<Services />);
    
    // Check if specific service titles are rendered
    expect(screen.getByText('Software Product Development')).toBeInTheDocument();
    expect(screen.getByText('Upgradation Services')).toBeInTheDocument();
    expect(screen.getByText('Consulting and Business Analysis')).toBeInTheDocument();

    // Check for service descriptions
    expect(screen.getByText(/transform your innovative ideas/i)).toBeInTheDocument();
    expect(screen.getByText(/keeping your web technologies up-to-date/i)).toBeInTheDocument();
    expect(screen.getByText(/expert guidance and strategic planning/i)).toBeInTheDocument();

    // Check if images are rendered
    expect(screen.getByAltText('Software Product Development')).toBeInTheDocument();
    expect(screen.getByAltText('Upgradation Services')).toBeInTheDocument();
    expect(screen.getByAltText('Consulting and Business Analysis')).toBeInTheDocument();
  });

  it('renders the carousel correctly', () => {
    render(<Services />);
    
    // Check for the carousel using data-testid if added
    const carousel = screen.getByTestId('service-carousel'); // or appropriate role
    expect(carousel).toBeInTheDocument();
  });
});
