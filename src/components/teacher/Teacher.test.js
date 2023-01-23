import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Teacher from "./AddTeacher.jsx";
import "@testing-library/jest-dom";

test("renders learn react", () => {
  render(
    <BrowserRouter>
      <Teacher />
    </BrowserRouter>
  );
  const text = screen.getByText(/First name/i);
  expect(text).toBeInTheDocument();
});
