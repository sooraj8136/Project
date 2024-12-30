import { createSlice } from "@reduxjs/toolkit";

// Set inital value
const initialState = {
  darkMode: false,
};

// Create theme slice
const darkModeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setTheme } = darkModeSlice.actions;

export default darkModeSlice.reducer