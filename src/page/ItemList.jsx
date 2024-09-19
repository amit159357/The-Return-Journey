// ItemList.js
import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate, useLocation } from "react-router-dom";

// ItemList component receives 'data' as a prop and renders a list of items
const ItemList = ({ data, page = 1 }) => {
  const navigate = useNavigate();
  //   const location = useLocation();

  // Debug log to check if the component re-renders (useful when using memo)
  console.log("Check render inside ItemList", page);

  const handleRowClick = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <tbody>
      {/* Display a message if no items match the search term */}
      {data?.length === 0 ? (
        <h1>No match</h1> // Display this message if the filtered data is empty
      ) : (
        // Map through the data array and render each item in a table row
        data?.map((el, i) => (
          <>
            <tr
              key={i}
              onClick={() => handleRowClick(el?._id)}
              style={{ cursor: "pointer" }}
            >
              <td>{5 * (page - 1) + i + 1}</td>{" "}
              {/* Display serial number (1-based index) */}
              <td>{el.title}</td> {/* Display item title */}
            </tr>
          </>
        ))
      )}
    </tbody>
  );
};

// Using React.memo to prevent unnecessary re-renders if props (data) haven't changed
export default memo(ItemList);
