import { render } from "@testing-library/react";
import Hello from "./Hello";

it(`Should render "Hello world" `, () => {
  render(<Hello />);
});
