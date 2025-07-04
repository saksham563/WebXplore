import { render, screen, fireEvent } from "@testing-library/react";
import Contactus from "../contactus/Contactus.jsx";

describe("Contactus Component", () => {
  test("renders form fields correctly", () => {
    render(<Contactus />);

    // Check for form fields
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  test("validates form inputs", async () => {
    render(<Contactus />);

    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(/first name is required/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  test("submits form with correct data", async () => {
    
    render(<Contactus />);

    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello there!" },
    });

    const submitButton = screen.getByRole("button", { name: /send message/i }); 
    fireEvent.click(submitButton);

    // Check for submission feedback
    // await waitFor(() =>
    //   expect(
    //     screen.getByText(/form submitted successfully/i)
    //   ).toBeInTheDocument()
    // );
    // window.alert.mockRestore(); 
  });
});
