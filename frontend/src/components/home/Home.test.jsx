import { render, screen } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Home Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
  
  it('should render the Services component', () => {
    const servicesElements = screen.getAllByText(/services/i);
    expect(servicesElements.length).toBeGreaterThan(0); // Check if there are any elements with that text
  });

  it('should render the KeyFeatures component', () => {
    const keyFeaturesElement = screen.getByText(/key features/i);
    expect(keyFeaturesElement).toBeInTheDocument();
  });

  it('should render the Testimonials component', () => {
    const testimonialsElement = screen.getByText(/testimonials/i);
    expect(testimonialsElement).toBeInTheDocument();
  });
});
