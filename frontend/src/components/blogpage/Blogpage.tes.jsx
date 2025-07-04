import Blogpage from '../blogpage/Blogpage.jsx';
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from 'vitest';

//blogpage testing

beforeAll(() => {
    global.IntersectionObserver = class {
        constructor() {}
        observe() {}
        disconnect() {}
        unobserve() {}
    };
  });
  
  describe("Blogpage Component", () => {
    test("loads posts from the server", async () => { 
      // Mock fetch API response
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve([
              { _id: "1", title: "Test Post", description: "Description", category: "AI Web Development", poster: "image.jpg" },
            ]),
        })
      );
  
      render(<Blogpage />);
  
      // Check if loading message appears
      expect(screen.getByText("Loading posts...")).toBeInTheDocument();
  
      // Wait for posts to load and check if the post title appears
      const postTitle = await screen.findByText("Test Post");
      expect(postTitle).toBeInTheDocument();
      
      // Restore original fetch function
      global.fetch.mockRestore();
    });
  });