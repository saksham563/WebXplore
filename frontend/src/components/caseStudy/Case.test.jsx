import { render, screen, fireEvent } from '@testing-library/react';
import Case from '../caseStudy/Case.jsx'; // Adjust the import path if necessary

describe('Case Component', () => {
    it('renders the Case component', () => {
      render(<Case />);
  
      // Check if the main title is in the document
      expect(screen.getByText(/Our Case Studies/i)).toBeInTheDocument();
  
      // Use a function to find the description
    //   expect(screen.getByText((content, element) => {
    //     return content.includes("Dive into our in-depth case studies");
    //   })).toBeInTheDocument();
    });
  
    it('opens the PDF on card click', () => {
      render(<Case />);
  
      // Mock the window.open function
      const originalOpen = window.open;
      window.open = vi.fn(); // Use vi.fn() instead of jest.fn()
  
      // Find the case card and click it
      const caseCard = screen.getByText(/Case Study: AI-Powered Chatbots/i).closest('div');
      
      fireEvent.click(caseCard);
  
      // Validate that the window.open function was called
      expect(window.open).toHaveBeenCalledWith(expect.stringContaining('cs1.pdf'), '_blank');
  
      // Restore the original window.open function
      window.open = originalOpen;
    });
  }); 