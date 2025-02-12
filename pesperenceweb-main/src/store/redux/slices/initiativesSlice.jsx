import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getInitiativeById, getAllInitiatives } from "../../../../API/api.js"; // Import your API functions

export const fetchAllInitiatives = createAsyncThunk(
  "initiatives/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllInitiatives();
      return response; // Only return response data, not the full Axios response
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching all initiatives"
      );
    }
  }
);

export const fetchInitiativeById = createAsyncThunk(
  "initiatives/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getInitiativeById(id);
      return response; // Only return response data, not the full Axios response
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching initiative"
      );
    }
  }
);

const initiativeSlice = createSlice({
  name: "initiatives",
  initialState: {
    data: [],
    allData: [], // Store for all initiatives
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch All Initiatives
      .addCase(fetchAllInitiatives.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllInitiatives.fulfilled, (state, action) => {
        state.loading = false;
        state.allData = action.payload;
      })
      .addCase(fetchAllInitiatives.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Initiative By ID
      .addCase(fetchInitiativeById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInitiativeById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchInitiativeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default initiativeSlice.reducer;
