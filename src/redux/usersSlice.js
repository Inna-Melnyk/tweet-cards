import { createSlice } from '@reduxjs/toolkit';
// import { preview } from 'vite';
// import {
//   fetchCurrentUser,
//   logInUser,
//   logoutUser,
//   signUpUser,
// } from './authOperations';
// import {
//   getCurrentUserThunk,
//   // updateThemeThunk,
//   updateUserThunk,
// } from '../UserInfo/userOperations';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { fetchUsers, updateUserById } from './usersOperations';

const initialState = {
  usersAll: [],
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
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.usersAll.push(...action.payload);
;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateUserById.pending, (state) => {
        state.isLoading = true;
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
  //   .addCase(logoutUser.pending, (state) => {
  //     state.isLoading = true;
  //   })
  //   .addCase(logoutUser.fulfilled, (state) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.user = { name: '', avatarURL: '', email: '' };

  //     state.token = null;
  //     state.isLoggedIn = false;
  //     console.log(state);
  //   })
  //   .addCase(logoutUser.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   })
  //   .addCase(updateUserThunk.pending, (state) => {
  //     state.isLoading = true;
  //     // Loading.hourglass('We are validating your data...');
  //   })
  //   .addCase(updateUserThunk.fulfilled, (state, action) => {
  //     console.log(action.payload, state.user);
  //     state.user.name = action.payload.data.name;
  //     state.user.avatarURL = action.payload.data.avatarURL;
  //     state.isLoading = false;
  //     // Loading.remove();
  //   })
  //   .addCase(updateUserThunk.rejected, (state, payload) => {
  //     state.error = payload;
  //     state.isLoading = false;
  //     // Loading.remove();
  //   })
  //   .addCase(getCurrentUserThunk.pending, (state) => {
  //     state.isLoading = true;
  //     // Loading.hourglass('We are validating your data...');
  //   })
  //   .addCase(getCurrentUserThunk.fulfilled, (state, payload) => {
  //     state.user = {
  //       name: payload.name,
  //       email: payload.email,
  //       avatarURL: payload.avatarURL,
  //       id: payload._id,
  //     };
  //     state.firstRender = false;
  //     state.theme = payload.theme;
  //     state.isLoading = false;
  //     // Loading.remove();
  //   })
  //   .addCase(getCurrentUserThunk.rejected, (state, payload) => {
  //     state.error = payload;
  //     state.isLoading = false;
  //     // Loading.remove();
  //   })
  //   .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
  //     state.user.name = payload.user.name;
  //     state.user.email = payload.user.email;
  //     state.user.avatarURL = payload.user.avatarURL;

  //     state.isLoggedIn = true;
  //     state.isRefreshing = false;
  //   })
  //   .addCase(fetchCurrentUser.rejected, (state, action) => {
  //     state.error = action.payload;
  //     state.isRefreshing = false;
  //   })
  //   .addCase(fetchCurrentUser.pending, (state) => {
  //     state.isRefreshing = true;
  //   }),
  // .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
  //   state.user.name = payload.name;
  //   state.user.email = payload.email;

  //   state.isLoggedIn = true;
  //   // state.isRefreshing = false;
  // })
  // .addCase(fetchCurrentUser.rejected, (state, action) => {
  //   state.error = action.payload;
  //   // state.isRefreshing = false;
  // })
  // .addCase(fetchCurrentUser.pending, (state) => {
  //   // state.isRefreshing = true;
  // }),
});

export const usersReducer = usersSlice.reducer;
export const { clearState } = usersSlice.actions;
