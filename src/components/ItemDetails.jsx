import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/items/itemSlice";
import ItemList from "../page/ItemList";

function ItemDetails() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.data.status);
  const data = useSelector((state) => state.data.items);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    dispatch(fetchData({ url: apiUrl, page: 1, limit: +Infinity }));
  }, [dispatch, apiUrl]);

  const { id } = useParams();

  const item = useMemo(() => {
    return data?.find((item) => item._id === id);
  }, [data, id]);

  return (
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
          <ItemList data={[item]} />
        </tbody>
      )}
    </table>
  );
}

export default ItemDetails;
