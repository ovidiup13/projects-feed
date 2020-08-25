import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { useProducts } from "./products";
jest.mock("./products");

const useProductsMock = useProducts as jest.Mock;

beforeEach(() => {
  useProductsMock.mockReturnValue([]);
});

afterEach(() => {
  useProductsMock.mockReset();
});

test("renders the project sections", () => {
  const { getByText } = render(<App />);

  const topSection = getByText(/top 3 projects/i);
  expect(topSection).toBeInTheDocument();

  const latestSection = getByText(/latest projects/i);
  expect(latestSection).toBeInTheDocument();
});

test("renders the initial state", async () => {
  const { getAllByText } = render(<App />);

  const loadingTop = getAllByText(/Loading/i);
  expect(loadingTop).toHaveLength(2);
});

test("renders the projects", async () => {
  useProductsMock.mockReturnValue([
    {
      id: 1,
      name: "Example project",
      description: "example description",
      authors: [],
      createdAt: new Date(),
      upvotes: 2,
    },
  ]);

  // TODO: test project list is showing ok
});
