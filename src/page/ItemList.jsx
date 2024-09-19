// ItemList.js
import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";

const ItemList = ({ data, page = 1 }) => {
  const navigate = useNavigate();

  console.log("Check render inside ItemList");

  const handleRowClick = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <tbody>

      {data?.length === 0 ? (
        <h1>No match</h1>
      ) : (

        data?.map((el, i) => (
          <>
            <tr
              key={i}
              onClick={() => handleRowClick(el?._id)}
              style={{ cursor: "pointer" }}
            >
              <td>{5 * (page - 1) + i + 1}</td>{" "}

              <td>{el.title}</td> 
            </tr>
          </>
        ))
      )}
    </tbody>
  );
};

export default memo(ItemList);
