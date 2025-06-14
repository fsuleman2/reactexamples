import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  apiResponse: [],
};

export const apiSlice = createSlice({
  name: "apiSlice",
  initialState,
  reducers: {
    getFetchData: (state, action) => {
      state.apiResponse = action.payload;
    },
  },
});
export const { getFetchData } = apiSlice.actions;
export default apiSlice.reducer;
