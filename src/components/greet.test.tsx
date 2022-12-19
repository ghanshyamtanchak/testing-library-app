import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet Render Successfully", () => {
  render(<Greet />);
  const textElement = screen.getByText(/Hello world/i);
  expect(textElement).toBeInTheDocument();
});
