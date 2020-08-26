import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { useProjects } from './projects';
jest.mock('./projects');

const useProjectsMock = useProjects as jest.Mock;

beforeEach(() => {
  useProjectsMock.mockReturnValue([]);
});

afterEach(() => {
  useProjectsMock.mockReset();
});

test('renders the project sections', () => {
  const { getByText } = render(<App />);

  const topSection = getByText(/top 3 projects/i);
  expect(topSection).toBeInTheDocument();

  const latestSection = getByText(/latest projects/i);
  expect(latestSection).toBeInTheDocument();
});

test('renders the search input', () => {
  const { getByRole } = render(<App />);

  const searchBox = getByRole('searchbox');
  expect(searchBox).toBeInTheDocument();
});
