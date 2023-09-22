import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './contactsOperations';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  isShowAddModal: false,
  isShowEditModal: false,
  error: null,
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(contact => {
          return contact._id !== action.payload;
        });
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.map(contact => {
          if (contact._id === action.payload._id) {
            return action.payload;
          }
          return contact;
        });
      })
      .addCase(editContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),

  reducers: {
    filterReducer(state, action) {
      state.filter = action.payload.toLowerCase();
    },
    addModalReducer(state, action) {
      state.isShowAddModal = action.payload;
    },
    editModalReducer(state, action) {
      state.isShowEditModal = action.payload;
    },
  },
});

export const { filterReducer, addModalReducer, editModalReducer } =
  contactsSlice.actions;
