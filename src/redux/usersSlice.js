import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUserById } from './usersOperations';

const initialState = {
  usersAll: [],
  pageNo: [],
  isfetchingCurrent: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
        state.usersAll = action.meta.arg === 1 ? [] : [...state.usersAll];
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.usersAll = [...state.usersAll, ...action.payload];
        state.pageNo = [...state.pageNo, action.meta.arg];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { id, followers } = action.payload;
        state.usersAll = state.usersAll.map((user) => {
          if (user.id === id) {
            return { ...user, followers: followers };
          }
          return user;
        });
      })
      .addCase(updateUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const usersReducer = usersSlice.reducer;
