import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllAssociations, getAssociationById } from "../../../../API/api.js"; // Import your API functions

// Fetch associations by ID
export const fetchAssociationsById = createAsyncThunk(
  "associations/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getAssociationById(id);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching data");
    }
  }
);

// Fetch all associations
export const fetchAllAssociations = createAsyncThunk(
  "associations/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllAssociations();
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching all associations"
      );
    }
  }
);

const associationSliceById = createSlice({
  name: "associations",
  initialState: {
    data: [],
    allData: [], // Store for all associations
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch By ID
      .addCase(fetchAssociationsById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAssociationsById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAssociationsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All Associations
      .addCase(fetchAllAssociations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllAssociations.fulfilled, (state, action) => {
        state.loading = false;
        state.allData = action.payload;
      })
      .addCase(fetchAllAssociations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default associationSliceById.reducer;
