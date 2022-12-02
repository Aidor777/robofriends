import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("Card component renders with a title", () => {
  render(<Card id={1} name={"Test"} email={"test@test.com"} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Test");
});
