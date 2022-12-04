import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../layout/Header";

test("header-rendering", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});
