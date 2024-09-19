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
    <div className="container">
      <Toaster />
      <button onClick={() => checkMemoization()} className="dummy-button">
        CLICK ME
      </button>

      <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
      <table>
        <caption>Sample Data Table</caption>
        <thead>
          <tr>
            <th>S No.</th>
            <th>Title</th>
          </tr>
        </thead>

        {status === "loading" ? (
          <td colSpan="2">Loading...</td>
        ) : status === "failed" ? (
          <h1>
            Error....
            <span
              onClick={() => window.location.reload()}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Please Refresh
            </span>
          </h1>
        ) : (
          <ItemList data={filteredData} page={currentPage} />
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
