import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./components/Pagination";

test("renders pagination and handles button clicks", () => {

  const handlePagination = jest.fn();

  render(
    <Pagination
      handlePagination={handlePagination}
      totalPages={10}
      currentPage={2}
    />
  );


  expect(screen.getByText("Page 2 of 10")).toBeInTheDocument();


  fireEvent.click(screen.getByText("Next"));
  expect(handlePagination).toHaveBeenCalledWith("forward");


  fireEvent.click(screen.getByText("Previous"));
  expect(handlePagination).toHaveBeenCalledWith("backward");
});
