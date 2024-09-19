import React from "react";
import { useEffect, useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "sonner";
import { fetchData } from "../features/items/itemSlice";
import ItemList from "./ItemList";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

function Table() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.items);
  const status = useSelector((state) => state.data.status);
  const totalPages = useSelector((state) => state.data.totalPages);

  const [searchTerm, setSearchTerm] = useState("");
  const [_, setCounter] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [paginationVisibility, setHidePagination] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;
  const renderCount = useRef(0);
  renderCount.current += 1;

  useEffect(() => {
    dispatch(
      fetchData({ url: apiUrl, page: currentPage, limit: itemsPerPage })
    );
  }, [currentPage, itemsPerPage, dispatch, apiUrl]);

  const handlePagination = (operation) => {
    setCurrentPage((prevPage) => {
      if (operation === "forward" && prevPage < totalPages) {
        return prevPage + 1;
      }
      if (operation === "backward" && prevPage > 1) {
        return prevPage - 1;
      }
      return prevPage;
    });
  };

  const filteredData = useMemo(() => {
    return data?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
    const shouldHidePagination = e.target.value.length > 0;
    setHidePagination(shouldHidePagination);
  };

  const checkMemoization = () => {
    setCounter((prevValue) => prevValue + 1);
    toast("This is to check memoization");
  };

  console.log("Memoization Debug:", renderCount.current);

  return (
    <div className="container mx-auto px-4">
      <Toaster />

      <div className="text-center my-6">
        <h1 className="text-3xl font-bold text-gray-800">Sample Items Table</h1>
        <p className="text-gray-600 mt-2">
          Browse through the items below. Use the search bar to quickly find
          what you need.
        </p>
      </div>

      <button
        onClick={() => checkMemoization()}
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
      >
        CLICK ME
      </button>

      <div className="flex justify-center mb-6">
        <SearchBar
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-3 px-6 border-b text-left font-semibold text-gray-700">
              S.NO:
            </th>
            <th className="py-3 px-6 border-b text-left font-semibold text-gray-700">
              Title
            </th>
          </tr>
        </thead>
        {status === "loading" ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <tbody>
            <ItemList data={filteredData} page={currentPage} />
          </tbody>
        )}
      </table>

      {!paginationVisibility && (
        <Pagination
          handlePagination={handlePagination}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default Table;
