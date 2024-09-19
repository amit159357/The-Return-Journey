import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async ({ url, page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${url}/products/getProducts?page=${page}&limit=${limit}`
      );
      return response.data; 
    } catch (error) {

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const dataSlice = createSlice({
  name: "data", 
  initialState: {
    status: "idle", 
    error: null, 
    totalPages: 1, 
    items: [],
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
        state.totalPages = action.payload.totalCount; 
      })
   
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; 
      });
  },
});


export default dataSlice.reducer;
