import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // For handling <NavLink>
import Faq from "./Faq"; // Adjust path as necessary
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

beforeAll(() => {
    global.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  });
  

describe("Faq Component", () => {
  it("renders the FAQ title", () => {
    render(
      <MemoryRouter>
        <Faq />
      </MemoryRouter>
    );
    expect(screen.getByText(/frequently asked questions/i)).toBeInTheDocument();
  });

//   it("renders the correct number of FAQ items", () => {
//     render(
//       <MemoryRouter>
//         <Faq />
//       </MemoryRouter>
//     );
//     const faqItems = screen.getAllByRole("button", { name: /collapse/i });
//     expect(faqItems.length).toBe(25); // Adjust if you have more or fewer items 
//   });

  it("renders the 'Contact Us' button", () => {
    render(
      <MemoryRouter>
        <Faq />
      </MemoryRouter>
    );
    expect(screen.getByRole("button", { name: /contact us/i })).toBeInTheDocument();
  });
});
