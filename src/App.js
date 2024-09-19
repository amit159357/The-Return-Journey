import "./App.css";
import ItemDetails from "./components/ItemDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Table from "./page/Table";
function App() {
  // Initialize dispatch function from Redux to dispatch actions
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
