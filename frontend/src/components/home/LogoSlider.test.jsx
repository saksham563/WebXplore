// LogoSlider.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LogoSlider from './LogoSlider';
import '@testing-library/jest-dom'; // for additional matchers

describe('LogoSlider Component', () => {
  it('renders the logo slider and displays all logos', () => {
    render(<LogoSlider />);

    // Check if the logo slider container is in the document
    const logos = screen.getAllByRole('img'); // Get all image elements
    expect(logos).toHaveLength(16); // 8 original + 8 duplicated logos

    // Check the alt attribute for each logo
    logos.forEach((logo, index) => {
      expect(logo).toHaveAttribute('alt', `Logo ${index % 8 + 1}`); // Use modulus to map to 8 unique logos
    });

    // Check the src attributes for the first original logo
    expect(logos[0]).toHaveAttribute('src', 'https://via.placeholder.com/150x80?text=Logo+1');
    expect(logos[1]).toHaveAttribute('src', 'https://via.placeholder.com/150x80?text=Logo+2');
    expect(logos[2]).toHaveAttribute('src', 'https://via.placeholder.com/150x80?text=Logo+3');
    expect(logos[3]).toHaveAttribute('src', 'https://via.placeholder.com/150x80?text=Logo+4');
    expect(logos[4]).toHaveAttribute('src', 'https://via.placeholder.com/150x80?text=Logo+5');
    expect(logos[5]).toHaveAttribute('src', 'https://via.placeholder.com/150x80?text=Logo+6');
    expect(logos[6]).toHaveAttribute('src', 'https://via.placeholder.com/150x80?text=Logo+7');
    expect(logos[7]).toHaveAttribute('src', 'https://via.placeholder.com/150x80?text=Logo+8');
  });
});
