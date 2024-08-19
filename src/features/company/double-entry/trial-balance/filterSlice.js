import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    show: false,
    filter: {},
  },
  reducers: {
    handleShow: (state, action) => {
      state.show = !state.show;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter, handleShow } = filterSlice.actions;

export default filterSlice.reducer;
