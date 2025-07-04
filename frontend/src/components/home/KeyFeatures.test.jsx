// KeyFeatures.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import KeyFeatures from './KeyFeatures';
import '@testing-library/jest-dom'; // for additional matchers

describe('KeyFeatures Component', () => {
  it('renders the key features section', () => {
    render(<KeyFeatures />);

    // Check if the heading is rendered
    const heading = screen.getByText(/Key Features/i);
    expect(heading).toBeInTheDocument();

    // Check if the features are rendered
    const featureTitles = [
      "Reasonable Pricing",
      "Business-Specific Web Development",
      "Integration of Latest Trends and Expertise",
    ];

    featureTitles.forEach((title) => {
      const featureTitle = screen.getByText(title);
      expect(featureTitle).toBeInTheDocument();
    });

    // Check if the feature descriptions are rendered
    const featureDescriptions = [
      /We offer competitive and transparent pricing structures/i,
      /Our solutions are customized to address the unique challenges/i,
      /We stay abreast of the latest industry trends/i,
    ];

    featureDescriptions.forEach((description) => {
      const featureDescription = screen.getByText(description);
      expect(featureDescription).toBeInTheDocument();
    });
  });
});
