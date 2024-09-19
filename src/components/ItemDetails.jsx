import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/items/itemSlice";
import ItemList from "../page/ItemList";

function ItemDetails() {
  // Get the list of items from the Redux store
  const dispatch = useDispatch();
  const status = useSelector((state) => state.data.status);
  const data = useSelector((state) => state.data.items);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    dispatch(
      fetchData({ url: apiUrl, page: 1, limit: +Infinity }) // Dispatch fetchData with API URL, current page, and item limit
    );
  }, []);

  // Get the item id from URL parameters
  const { id } = useParams();

  // Find the item with the matching id
  const item = useMemo(() => {
    return data?.find((item) => item._id === id);
  }, [data, id]);
  console.log(id, data);
  return (
    <div>
      {status === "loading" ? (
        <h1>Loading....</h1>
      ) : item ? (
        <ItemList data={[item]} />
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}

export default ItemDetails;
