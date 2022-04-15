// Import modules
import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

// Types
// Chance for Null for initial state, when no contact is selected
interface InitialStateType {
  id: null | number;
};

// Initial state
const initialState: InitialStateType = {
  id: null
};

// Init Selected Contact Slice
export const selectedContact = createSlice({
  name: 'selectedContact',
  initialState,
  reducers: {
    setId(state, action: PayloadAction<{ id: number }>){
      state.id = action.payload.id;
    }
  }
});

export default selectedContact.reducer;