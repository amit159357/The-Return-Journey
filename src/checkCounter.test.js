import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import ItemList from "./page/ItemList";

// Mock console.log
global.console = {
  ...console,
  log: jest.fn(),
};

test("checks if console.log is called", () => {
  const emptyData = [];

  // Render the component within MemoryRouter
  render(
    <MemoryRouter>
      <ItemList data={emptyData} />
    </MemoryRouter>
  );

  // Check if console.log was called with the exact string
  expect(console.log).toHaveBeenCalledWith("Check render inside ItemList");
});
