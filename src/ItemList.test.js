// ItemList.test.js
import { render, screen } from "@testing-library/react";
import ItemList from "./page/ItemList";


jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("shows 'No match' when there is no data", () => {
  const emptyData = [];

  render(<ItemList data={emptyData} />);


  expect(screen.getByText("No match")).toBeInTheDocument();
});
