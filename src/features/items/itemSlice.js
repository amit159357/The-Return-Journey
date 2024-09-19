import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk for fetching data from the API
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async ({ url, page, limit }, thunkAPI) => {
    try {
      // Send a GET request to the provided URL with pagination parameters
      const response = await axios.get(
        `${url}/products/getProducts?page=${page}&limit=${limit}`
      );
      return response.data; // Return the API response data
    } catch (error) {
      // Handle errors and reject with the error message
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Create a data slice to manage the state related to data fetching
const dataSlice = createSlice({
  name: "data", // Name of the slice
  initialState: {
    status: "idle", // Initial loading status
    error: null, // Store error messages
    totalPages: 1, // Initialize totalPages with a default value of 1
    items: [], // Store fetched items
  },
  reducers: {}, // No regular reducers needed as we handle state in extraReducers
  extraReducers: (builder) => {
    builder
      // Handle loading state when the fetchData request is pending
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      // Handle the state when the fetchData request is successful
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.data; // Store the fetched items
        state.totalPages = action.payload.totalCount; // Set the total page count from the response
      })
      // Handle errors when the fetchData request fails
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Store the error message
      });
  },
});

// Export the reducer to be used in the store
export default dataSlice.reducer;
