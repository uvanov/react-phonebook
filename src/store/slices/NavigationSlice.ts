// Import modules
import {
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";

// Initial state
const initialState = {
  isOpened: false
};

// Init Navigation Slice
export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavigationOpened(state, action: PayloadAction<boolean>) {
      state.isOpened = action.payload;
    }
  }
});

export default navigationSlice.reducer;