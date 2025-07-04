import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Pricing from './Pricing';

describe('Pricing Component', () => {
  beforeEach(() => {
    render(<Pricing />);
  });

  it('should render the introductory title', () => {
    const title = screen.getByText(/why choose our development services?/i);
    expect(title).toBeInTheDocument();
  });

  it('should render the correct prices', () => {
    const mobilePrice = screen.getByText('$10000');
    const webPrice = screen.getByText('$25000');
    const otherPrice = screen.getByText(/\$3000-\$5000/i); // regex to match the price range

    expect(mobilePrice).toBeInTheDocument();
    expect(webPrice).toBeInTheDocument();
    expect(otherPrice).toBeInTheDocument();
  });

  it('should render all feature lists in cards', () => {
    const mobileFeatures = screen.getByText(/cross-platform apps with react native or flutter/i);
    const webFeatures = screen.getByText(/fully responsive design for all devices/i);
    const otherFeatures = screen.getByText(/seo optimization/i);

    expect(mobileFeatures).toBeInTheDocument();
    expect(webFeatures).toBeInTheDocument();
    expect(otherFeatures).toBeInTheDocument();
  });
});
