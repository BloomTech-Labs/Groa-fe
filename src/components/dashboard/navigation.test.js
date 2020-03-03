import React from "react";
import { render } from "@testing-library/react";
import { getAllByTestId } from "../../utils/test-utils.js";


// component to be tested.
import Navigation from "./navigation.js";

it("renders Register component", () => { 
  const { container } = render(<Navigation />); 
  const component = getAllByTestId(container, "Navigation-component"); 
  expect(component.length).toBe(1); 
});
