import { render, screen } from "@testing-library/react";
import App from "./App";

test("shows the loading screen on first render", () => {
  render(<App />);
  const loadingText = screen.getByText(/loading portfolio/i);
  expect(loadingText).toBeInTheDocument();
});
