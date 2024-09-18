import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./features/slices/slice1";

function App() {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.items);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  useEffect(() => {
    if (status === "idle") {
      dispatch(
        fetchData(
          "https://the-return-journey-backend-1-0.onrender.com/api/v1/products/getProducts"
        )
      );
    }
  }, []);
  console.log("Thi", data);
  return (
    <div className="container">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <table>
        <caption>Sample Data Table</caption>
        <thead>
          <tr>
            <th>S No.</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {status === "loading" ?  (
              <h1>Loading...</h1>
            ):  (
            data?.map((el, i) => (
              <tr key={i}>
                <td>{i + 1}</td> <td>{el.title}</td>{" "}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
