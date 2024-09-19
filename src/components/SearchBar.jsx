import React from "react";

export default function SearchBar({ handleSearch, searchTerm }) {
  return (
    <div className="w-full flex justify-center mt-6 mb-8">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full max-w-md px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 shadow-sm transition duration-300 ease-in-out"
      />
    </div>
  );
}
