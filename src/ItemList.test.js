// ItemList.test.js
import { render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import ItemList from "./page/ItemList";

// Mock useNavigate
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("shows 'No match' when there is no data", () => {
  const emptyData = [];

  render(<ItemList data={emptyData} />);

  // Check if 'No match' text is present in the document
  expect(screen.getByText("No match")).toBeInTheDocument();
});
