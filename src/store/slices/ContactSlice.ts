import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Contact from '../../models/Contact'
import ContactApi from '../../api/ContactApi'

type contactsType = {
  contacts: Contact[],
  isLoading: boolean,
  error: string
}

const defaultValue: contactsType = {
  contacts: [],
  isLoading: false,
  error: ''
}

export const getListContacts = createAsyncThunk('GET_LIST_CONTACT', async () => {
  const contacts = await ContactApi.getAll();
  return contacts;
});

export const addContact = createAsyncThunk('ADD_CONTACT', async (body:Contact) => {
  const contacts = await ContactApi.add(body);
  return contacts;
});

const contactSlice = createSlice({
  name: 'contact',
  initialState: defaultValue,
  reducers: {},
  extraReducers: {
    //getListContact
    [getListContacts.fulfilled as any]: (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [getListContacts.pending as any]: (state) => {
      state.isLoading = true;
    },
    [getListContacts.rejected as any]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },

    //addContact
    [addContact.fulfilled as any]: (state) => {
      state.isLoading = false;
    },
    [addContact.pending as any]: (state) => {
      state.isLoading = true;
    },
    [addContact.rejected as any]: (state) => {
      state.isLoading = false;
    }
  }
});

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;