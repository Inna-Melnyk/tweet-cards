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
  async ( data , thunkAPI) => {
    console.log('id in request', data.id);

    console.log('newFollowers in request', data.updateFollowersAmount);
    try {
      const response = await axios.put(`/users/${data.id}`, {
        followers: data.updateFollowersAmount,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateUserThunk = createAsyncThunk(
  'users/updateUser',
  async (data, { rejectWithValue }) => {
    try {
      let res = null;
      if (data.avatarURL) {
        res = await axios.patch(
          'users/update',
          { name: data.name, avatar: data.avatarURL },
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          },
        );
      } else {
        res = await axios.patch('users/update', { name: data.name });
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  },
);
