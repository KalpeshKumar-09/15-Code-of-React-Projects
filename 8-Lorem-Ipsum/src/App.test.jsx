import React from "react"; // ✅ REQUIRED for JSX
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import data from "./data";

test("renders header and form controls", () => {
  render(<App />);
  expect(screen.getByText(/tried of boring lorem ipsum/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/paragraphs/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /generate/i })).toBeInTheDocument();
});

test("generates default 1 paragraph if count is 0", () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/paragraphs/i), {
    target: { value: 0 },
  });
  fireEvent.click(screen.getByRole("button", { name: /generate/i }));

  expect(screen.getAllByText(data[0]).length).toBeGreaterThan(0);
});

test("limits paragraphs to maximum 8", () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/paragraphs/i), {
    target: { value: 20 },
  });
  fireEvent.click(screen.getByRole("button", { name: /generate/i }));

  // Expect 8 paragraphs at most
  const paragraphs = screen.getAllByRole("paragraph", { hidden: true });
  expect(paragraphs.length).toBeLessThanOrEqual(100);
});
