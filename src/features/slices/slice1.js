import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk for fetching data
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (endpoint, thunkAPI) => {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.data;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default dataSlice.reducer;
