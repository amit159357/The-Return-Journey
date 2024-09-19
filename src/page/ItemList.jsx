import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const ItemList = ({ data, page = 1 }) => {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/item/${id}`);
  };
  console.log("Check render inside ItemList");
  return (
    <>
      {data?.length === 0 ? (
        <tr>
          <td colSpan="2" className="text-center py-4">
            No match
          </td>
        </tr>
      ) : (
        data?.map((item, i) => (
          <tr
            key={i}
            onClick={() => handleRowClick(item?._id)}
            className="hover:bg-gray-100 cursor-pointer transition-all duration-200"
          >
            <td className="py-3 px-6 border-b text-left">
              {5 * (page - 1) + i + 1}
            </td>
            <td className="py-3 px-6 border-b text-left">{item?.title}</td>
          </tr>
        ))
      )}
    </>
  );
};

export default memo(ItemList);
