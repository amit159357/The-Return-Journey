import { configureStore } from "@reduxjs/toolkit";
import yourReducer from "../features/slices/slice1"; 

const store = configureStore({
  reducer: {
    yourState: yourReducer, // Add your reducers here
  },
});

export default store;
