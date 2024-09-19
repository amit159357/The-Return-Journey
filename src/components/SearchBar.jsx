import React from 'react'

export default function SearchBar({handleSearch,searchTerm}) {
  return (
    <div className="search-bar">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm} 
      onChange={handleSearch}
    />
  </div>
  )
}
