import { configureStore } from "@reduxjs/toolkit";
import associationByIdReducer from "../redux/slices/associationsSlice.jsx";
import initiativeReducer from "../redux/slices/initiativesSlice.jsx";
import careersReducer from "../redux/slices/careersSlice.jsx";
import individualCareerReducer from "../redux/slices/individualCareersSlice.jsx"; // Import the new slice

const store = configureStore({
  reducer: {
    associationsById: associationByIdReducer,
    initiativesById: initiativeReducer,
    careersById: careersReducer,
    individualCareer: individualCareerReducer,
  },
});

export default store;
