// Import modules
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Import types
import { ContactType } from '../../types'

// Local types
type ContactsArrayType = ContactType[];

// Initial state
const initialState: ContactsArrayType = [
  {
    id: 1,
    name: 'Alex',
    status: 'Middle Frontend Developer',
    information: {
      bio: 'Bio information',
      email: 'alex.front@gmail.com',
      phone: '0432432567'
    },
    avatarUrl: 'https://i.imgur.com/qUnfwhh.png'
  }
];

// Init Contact Slice
export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    removeContact(state, action: PayloadAction<{ id: number }>) {
      return state.filter(contact => contact.id !== action.payload.id);
    },
    addContact(state, action: PayloadAction<ContactType>) {

    }
  }
});

// Exports
export default contactsSlice.reducer;


