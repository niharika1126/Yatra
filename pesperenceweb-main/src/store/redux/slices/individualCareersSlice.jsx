import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCareerById } from "../../../../API/api.js"; // Ensure correct import path

export const fetchIndividualCareer = createAsyncThunk(
  "individualCareer/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getCareerById(id);
      return response || {}; // Default to empty object
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching career");
    }
  }
);

const individualCareerSlice = createSlice({
  name: "individualCareer",
  initialState: {
    data: {}, // Ensure default state is always defined
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIndividualCareer.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIndividualCareer.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload || {}; // Default to empty object
      })
      .addCase(fetchIndividualCareer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default individualCareerSlice.reducer;
