import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/items/itemSlice'; // Import the slice reducer

const store = configureStore({
  reducer: {
    data: dataReducer, // Add your reducers here
  },
});

export default store;
