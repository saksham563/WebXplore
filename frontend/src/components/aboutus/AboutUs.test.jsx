// AboutUs.test.jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AboutUs from './AboutUs';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

// Mocking IntersectionObserver since it doesn't work in the test environment
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('AboutUs Component', () => {
  test('renders AboutUs page content', () => {
    render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );

    // Check if main heading is rendered
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();

    // Check if "Who We Are" section is displayed
    expect(screen.getByText(/Who We Are/i)).toBeInTheDocument();
    expect(screen.getByText(/We are a dynamic and innovative company/i)).toBeInTheDocument();

    // Check if the "Our Mission" section is displayed
    expect(screen.getByText(/Our mission is to provide cutting-edge technologies/i)).toBeInTheDocument();

    // Check if the "Discover More" button is rendered
    expect(screen.getByText(/Discover More/i)).toBeInTheDocument();
  });

  test('navigates to Contact page when "Discover More" is clicked', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/aboutus']}>
        <AboutUs />
      </MemoryRouter>
    );

    // Find the "Discover More" button and click it
    const discoverMoreButton = screen.getByText(/Discover More/i);
    fireEvent.click(discoverMoreButton);

    // Check if the URL changes to /contact (using MemoryRouter)
    await waitFor(() => {
      expect(container.innerHTML).toMatch('/contact');
    });
  });
});
