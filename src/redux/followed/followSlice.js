import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    followed:[]
}

const followSlice = createSlice({
  name: 'followed',
  initialState,
  reducers: {
      followedTweets(state, action) {
        
      const index = state.followed.indexOf(action.payload);

      if (index !== -1) {
        state.followed.splice(index, 1);
      }
      else {
        state.followed.push(action.payload);
      }

    },
  },
});

export const followReducer = followSlice.reducer;

export const { followedTweets } = followSlice.actions;
