import { render, screen, fireEvent } from '@testing-library/react';
import Chatbot from './Chatbot';

describe('Chatbot Component', () => {
  // Test chatbot icon toggling
  test('toggles the chatbot window when the icon is clicked', () => {
    render(<Chatbot />);
    const iconButton = screen.getByRole('button');

    // Check if window is initially closed
    expect(screen.queryByText(/Have a doubt\? We are here to help!/i)).not.toBeInTheDocument();

    // Open the chatbot
    fireEvent.click(iconButton);
    expect(screen.getByText(/Have a doubt\? We are here to help!/i)).toBeInTheDocument();
  });

  // Test if initial bot messages are displayed
  test('renders initial bot messages', () => {
    render(<Chatbot />);
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText(/Welcome! How can I help you today?/i)).toBeInTheDocument();
    expect(screen.getByText(/You can choose from the predefined questions below./i)).toBeInTheDocument();
  });

  // Test for section selection
  test('displays questions after selecting a section', () => {
    render(<Chatbot />);
    fireEvent.click(screen.getByRole('button')); // Open chatbot

    fireEvent.click(screen.getByText(/Website Development/i)); // Select a section

    expect(screen.getByText(/What type of website do you develop?/i)).toBeInTheDocument();
    expect(screen.getByText(/What is the cost of developing a basic website?/i)).toBeInTheDocument();
  });

  // Test for displaying answers
  test('displays the answer after a question is clicked', () => {
    render(<Chatbot />);
    fireEvent.click(screen.getByRole('button')); // Open chatbot

    fireEvent.click(screen.getByText(/Website Development/i)); // Select a section
    fireEvent.click(screen.getByText(/What type of website do you develop?/i)); // Click a question
  });
});
