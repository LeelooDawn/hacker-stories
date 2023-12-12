import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("something truthy and falsy", () => {
  test("true to be true", () => {
    expect(true).toBe(true);
  });

  test("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App component", () => {
  test("removes an item when clicking the Dismiss button", () => {});

  test("requests some initial stories from an API", () => {});
});
