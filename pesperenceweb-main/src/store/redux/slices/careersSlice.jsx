import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCareers, getCareerById } from "../../../../API/api.js"; // Import API functions

// Fetch all career opportunities
export const fetchAllCareers = createAsyncThunk(
  "careers/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllCareers();
      return response; // Return only the response data
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching careers");
    }
  }
);

// Fetch a specific career opportunity by ID
export const fetchCareerById = createAsyncThunk(
  "careers/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getCareerById(id);
      return response; // Return only the response data
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching career");
    }
  }
);

const careersSlice = createSlice({
  name: "careers",
  initialState: {
    data: {}, // Store for a single career
    allData: [], // Store for all careers
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch All Careers
      .addCase(fetchAllCareers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllCareers.fulfilled, (state, action) => {
        state.loading = false;
        state.allData = action.payload;
      })
      .addCase(fetchAllCareers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Career By ID
      .addCase(fetchCareerById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCareerById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCareerById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default careersSlice.reducer;
