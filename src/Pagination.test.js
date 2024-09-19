import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./components/Pagination";

test("renders pagination and handles button clicks", () => {
  // Mock function to handle pagination
  const handlePagination = jest.fn();

  // Render the Pagination component
  render(
    <Pagination
      handlePagination={handlePagination}
      totalPages={10}
      currentPage={2}
    />
  );

  // Check if pagination info is displayed correctly
  expect(screen.getByText("Page 2 of 10")).toBeInTheDocument();

  // Click the "Next" button and verify handlePagination is called
  fireEvent.click(screen.getByText("Next"));
  expect(handlePagination).toHaveBeenCalledWith("forward");

  // Click the "Previous" button and verify handlePagination is called
  fireEvent.click(screen.getByText("Previous"));
  expect(handlePagination).toHaveBeenCalledWith("backward");
});
