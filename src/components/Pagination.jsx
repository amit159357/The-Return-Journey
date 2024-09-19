import React from "react";

export default function Pagination({handlePagination,totalPages,currentPage}) {
  return (
    <div>
      <div className="pagination">
        <button
          onClick={() => handlePagination("backward")}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePagination("forward")}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
