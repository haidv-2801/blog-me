import { createSlice } from '@reduxjs/toolkit';

type uiDefaultValueObj = {
  navIsOpen: boolean,
  isLoading: boolean
};

const uiDefaultValue:uiDefaultValueObj  = {
  navIsOpen: false,
  isLoading: false
}

const ui = createSlice({
  name: 'ui',

  initialState: uiDefaultValue,

  reducers: {
   toggleNav: (state, action) => {
    state.navIsOpen = action.payload;
   },

   toggleLoading: (state, action) => {
    state.isLoading = action.payload;
   }
  },
});

export const uiActions = ui.actions;
export default ui.reducer;

