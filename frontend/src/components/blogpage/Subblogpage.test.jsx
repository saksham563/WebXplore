import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';
import Subblogpage from '../blogpage/Subblogpage.jsx';

// Set up axios mock
const mock = new axiosMock(axios);

describe('Subblogpage Component', () => {
  const postId = '123'; // Simulated post ID

  beforeEach(() => {
    // Reset the mock before each test
    mock.reset();
  });

  test('handles errors when post is not found', async () => {
    // Mock a failed API response
    mock.onGet(`http://localhost:5000/getUsers/${postId}`).reply(404);

    render(
      <MemoryRouter initialEntries={[`/subblogpage/${postId}`]}>
        <Subblogpage />
      </MemoryRouter>
    );

    // Wait for the error message
    await waitFor(() => expect(screen.getByText(/Post not found!/i)).toBeInTheDocument());
  });

  test('displays loading state initially', () => {
    render(
      <MemoryRouter initialEntries={[`/subblogpage/${postId}`]}>
        <Subblogpage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
