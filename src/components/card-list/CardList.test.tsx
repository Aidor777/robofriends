import React from "react";
import { render, screen } from "@testing-library/react";
import CardList from "./CardList";

test("CardList component renders with children", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Test",
      email: "test@test.com",
    },
  ];
  render(<CardList robots={mockRobots} />);
  expect(screen.getByTestId("card-list").hasChildNodes).toBeTruthy();
  expect(screen.getByTestId("card-list").childNodes.length).toBe(1);
});
