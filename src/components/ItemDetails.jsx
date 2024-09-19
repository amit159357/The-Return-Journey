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
    dispatch(
      fetchData({ url: apiUrl, page: 1, limit: +Infinity }) 
    );
  }, []);


  const { id } = useParams();


  const item = useMemo(() => {
    return data?.find((item) => item._id === id);
  }, [data, id]);

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
