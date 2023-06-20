import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const authToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      authToken.set(persistedToken);
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      authToken.set(persistedToken);
      const { data } = await axios.post('/contacts', newContact);
      Notify.success(`${newContact.name} added to phonebook successfully!`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      authToken.set(persistedToken);
      const { data } = await axios.delete(`/contacts/${contactId}`);
      Notify.warning(`${data.name} delete from phonebook.`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ contactId, name, number }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      authToken.set(persistedToken);
      const { data } = await axios.patch(`/contacts/${contactId}`, {
        name,
        number,
      });
      Notify.warning(`${data.name} edit in phonebook.`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
