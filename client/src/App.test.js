import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(<div>Learn React</div>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
