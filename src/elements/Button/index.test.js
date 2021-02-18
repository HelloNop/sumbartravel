import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "./index";

test("Should not Allowed click button if isDisable is present", () => {
  const { container } = render(<Button isDisable> </Button>);

  expect(container.querySelector("span.disable")).not.toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading> </Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = render(<button type="Link" isExternal></button>);

  expect(container.querySelector("a")).not.toBeInTheDocument();
});

test("Should render <Link> component", () => {
  const { container } = render(
    <Router>
      <button href="" type="link"></button>
    </Router>
  );

  expect(container.querySelector("a")).not.toBeInTheDocument();
});
