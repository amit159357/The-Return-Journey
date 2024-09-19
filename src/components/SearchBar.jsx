import React from 'react'

export default function SearchBar({handleSearch,searchTerm}) {
  return (
    <div className="search-bar">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm} // Controlled input bound to searchTerm state
      onChange={handleSearch} // Trigger handleSearch on input change
    />
  </div>
  )
}
