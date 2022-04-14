// Import modules
import {
  configureStore,
  combineReducers
} from "@reduxjs/toolkit";
import contactsReducer from "./slices/ContactsSlice";
import navigationSlice from './slices/NavigationSlice';

// Init root reducer
const rootReducer = combineReducers({
  contacts: contactsReducer,
  navigation: navigationSlice
});

// Configure store
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

// Exports types
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];