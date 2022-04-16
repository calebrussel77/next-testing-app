import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

it(`Should render "Hello world"`, () => {
  render(<Hello />);
  const myElement = screen.getByText(/Hello world/);
  expect(myElement).toBeInTheDocument();
  // screen.debug();
});
