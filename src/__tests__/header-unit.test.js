import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../layout/Header";

test("header-rendering", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(getByText("projects")).toBeInTheDocument();
  expect(getByText("whoami")).toBeInTheDocument();

  fireEvent.click(getByText("projects"));

  expect(window.location.pathname).toBe("/projects");

  fireEvent.click(getByText("whoami"));

  expect(window.location.pathname).toBe("/whoami");
});
