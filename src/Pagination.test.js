import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./components/Pagination";  // Adjust the path if necessary

const TestPagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePagination = (direction) => {
    if (direction === "forward" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "backward" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <Pagination
      handlePagination={handlePagination}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
};

test("checks if current page updates when buttons are clicked", () => {
  render(<TestPagination totalPages={5} />);


  expect(screen.getByText("1")).toBeInTheDocument();

  const nextButton = screen.getByRole("button", { name: /next/i });
  const previousButton = screen.getByRole("button", { name: /previous/i });


  fireEvent.click(nextButton);
  expect(screen.getByText("2")).toBeInTheDocument();


  fireEvent.click(nextButton);
  expect(screen.getByText("3")).toBeInTheDocument();


  fireEvent.click(previousButton);
  expect(screen.getByText("2")).toBeInTheDocument();


  fireEvent.click(previousButton);
  expect(screen.getByText("1")).toBeInTheDocument();
});
