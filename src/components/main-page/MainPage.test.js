import React from "react";
import { render, screen } from "@testing-library/react";

import MainPage from "./MainPage";

test("MainPage should be loading on pending", () => {
  const mockProps = {
    searchField: "",
    onSearchChange: jest.fn(),
    robots: [],
    isPending: true,
    onRequestRobots: jest.fn(),
  };
  render(<MainPage {...mockProps} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Loading...");
});

test("MainPage should filter robots", () => {
  const mockProps = {
    searchField: "a",
    onSearchChange: jest.fn(),
    robots: [
      {
        id: 1,
        name: "Test",
        email: "test@test.com",
      },
      {
        id: 2,
        name: "Pat",
        email: "pat@test.com",
      },
    ],
    isPending: false,
    onRequestRobots: jest.fn(),
  };
  render(<MainPage {...mockProps} />);
  expect(screen.queryByTestId("loading-header")).not.toBeInTheDocument();
  expect(screen.getByTestId("card-list").hasChildNodes).toBeTruthy();
  expect(screen.getByTestId("card-list").childNodes.length).toBe(1);
});
