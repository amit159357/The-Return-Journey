import React from 'react'
import { useEffect, useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "sonner"; // Import toast notification from 'sonner'
import { fetchData } from '../features/items/itemSlice';
import ItemList from './ItemList';
import Pagination from '../components/Pagination';
function Table() {
    const dispatch = useDispatch();

    // Fetch necessary data from the Redux store
    const data = useSelector((state) => state.data.items); // List of items
    const status = useSelector((state) => state.data.status); // Fetching status (loading, failed, etc.)
    const totalPages = useSelector((state) => state.data.totalPages); // Total number of pages for pagination
  
    // Local state for various features
    const [searchTerm, setSearchTerm] = useState(""); // Holds the search term entered by the user
    const [_, setCounter] = useState(0); // State to force re-render on memoization check
    const [currentPage, setCurrentPage] = useState(1); // Tracks the current page for pagination
    const [itemsPerPage] = useState(5); // Number of items per page (fixed to 5)
    const [paginationVisibility, setHidePagination] = useState(false); // Tracks whether to show or hide pagination based on search input
  
    const apiUrl = process.env.REACT_APP_API_URL; // API base URL from environment variables
  
    const renderCount = useRef(0); // Ref to track how many times the component renders
    renderCount.current += 1; // Increment render count on every render
  
    // useEffect to trigger the fetching of data whenever currentPage or itemsPerPage changes
    useEffect(() => {
      dispatch(
        fetchData({ url: apiUrl, page: currentPage, limit: itemsPerPage }) // Dispatch fetchData with API URL, current page, and item limit
      );
    }, [currentPage, itemsPerPage, dispatch, apiUrl]); // Dependencies: re-run whenever these values change
  
    // Function to handle pagination actions (forward and backward)
    const handlePagination = (operation) => {
      setCurrentPage((prevPage) => {
        if (operation === "forward" && prevPage < totalPages) {
          return prevPage + 1; // Move to next page if not on the last page
        }
        if (operation === "backward" && prevPage > 1) {
          return prevPage - 1; // Move to previous page if not on the first page
        }
        return prevPage; // Otherwise, stay on the current page
      });
    };
  
    // useMemo to filter the data based on the search term (optimized filtering)
    const filteredData = useMemo(() => {
      return data?.filter(
        (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) // Convert both item title and search term to lowercase for case-insensitive search
      );
    }, [data, searchTerm]); // Dependencies: re-run when data or searchTerm changes
  
    // Handler for search input changes
    const handleSearch = (e) => {
      setSearchTerm(e.target.value); // Update search term in state
      setCurrentPage(1); // Reset pagination to the first page when searching
      const shouldHidePagination = e.target.value.length > 0; // Hide pagination if search input is not empty
      setHidePagination(shouldHidePagination); // Update pagination visibility state
    };
  
    // Function to check memoization by updating the counter and showing a toast notification
    const checkMemoization = () => {
      setCounter((prevValue) => prevValue + 1); // Increment the counter (dummy state change)
      toast("This is to check memoization"); // Show toast notification indicating the memoization check
    };
  
    console.log("Memoization Debug:", renderCount.current); // Debug log to track render count
  
    return (
      <div className="container">
        {/* Toast notification container */}
        <Toaster />
  
        {/* Button to trigger memoization check */}
        <button onClick={() => checkMemoization()} className="dummy-button">
          CLICK ME
        </button>
  
        {/* Search bar to filter the data */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm} // Controlled input bound to searchTerm state
            onChange={handleSearch} // Trigger handleSearch on input change
          />
        </div>
  
        {/* Table structure to display the data */}
        <table>
          <caption>Sample Data Table</caption>
          <thead>
            <tr>
              <th>S No.</th> {/* Serial number header */}
              <th>Title</th> {/* Item title header */}
            </tr>
          </thead>
  
          {/* Display loading state, error, or filtered data based on status */}
          {status === "loading" ? (
            <td colSpan="2">Loading...</td> // Show loading indicator
          ) : status === "failed" ? (
            <h1>
              Error....
              {/* Option to refresh the page on error */}
              <span
                onClick={() => window.location.reload()}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Please Refresh
              </span>
            </h1>
          ) : (
            <ItemList data={filteredData} page = {currentPage}/> // Pass filtered data to ItemList component
          )}
        </table>
  
        {/* Conditionally render pagination based on visibility */}
        {!paginationVisibility && (
          <Pagination
            handlePagination={handlePagination} // Pass pagination handler
            totalPages={totalPages} // Pass total pages count
            currentPage={currentPage} // Pass current page number
          />
        )}
      </div>
    );
}

export default Table