import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Course from "./Course";
import "@testing-library/jest-dom";

test("renders learn react", () => {
  render(
    <BrowserRouter>
      <Course />
    </BrowserRouter>
  );
  const text = screen.getByText(/List of all courses/i);
  expect(text).toBeInTheDocument();
});
