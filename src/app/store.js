import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/slices/slice1'; // Import the slice reducer

const store = configureStore({
  reducer: {
    data: dataReducer, // Add your reducers here
  },
});

export default store;
