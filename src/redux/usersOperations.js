import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65270e1f917d673fd76d62b9.mockapi.io/users';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (pageNumber, thunkAPI) => {
    try {
      const response = await axios.get(`/users?page=${pageNumber}&limit=3`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateUserById = createAsyncThunk(
  'users/updateUser',
  async (data, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${data.id}`, {
        followers: data.updateFollowersAmount,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
