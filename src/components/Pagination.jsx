import React from "react";

export default function Pagination({
  handlePagination,
  totalPages,
  currentPage,
}) {
  return (
    <div className="flex justify-center items-center my-6 space-x-4">
      <button
        onClick={() => handlePagination("backward")}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-l-full transition-all duration-300 ease-in-out
          ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "hover:from-blue-600 hover:to-blue-800"
          }`}
      >
        Previous
      </button>

      <span className="px-5 py-2 text-gray-700 font-semibold bg-gray-100 border border-gray-300 rounded-full">
        Page <span className="text-blue-600">{currentPage}</span> of{" "}
        <span className="text-blue-600">{totalPages}</span>
      </span>

      <button
        onClick={() => handlePagination("forward")}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-r-full transition-all duration-300 ease-in-out
          ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "hover:from-blue-600 hover:to-blue-800"
          }`}
      >
        Next
      </button>
    </div>
  );
}
