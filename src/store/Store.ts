import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/UiSlice';
import blogReducer from './slices/BlogSlice';
import contactReducer from './slices/ContactSlice';

const rootReducer = {
  ui: uiReducer,
  blog: blogReducer,
  contact: contactReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
