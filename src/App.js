// import "./App.css";
import React from 'react'

import ItemDetails from "./components/ItemDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Table from "./page/Table";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/item/:id",
      element: <ItemDetails />,
    },
    {
      path: "/",
      element: <Table />,
    },

  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;


