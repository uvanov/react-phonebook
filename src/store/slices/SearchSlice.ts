// Import modules
import {
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";

// Initial state
const initialState = {
  query: ''
};

// Init Search Slice
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<{ query: string }>){
      state.query = action.payload.query;
    }
  }
});

export default searchSlice.reducer;

