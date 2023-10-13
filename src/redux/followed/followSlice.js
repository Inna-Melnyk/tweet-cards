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

      // If found in the 'followed' array, remove it
      if (index !== -1) {
        state.followed.splice(index, 1);
      }
      // If not found in the 'followed' array, add it
      else {
        state.followed.push(action.payload);
      }

    },
  },
});

export const followReducer = followSlice.reducer;

export const { followedTweets } = followSlice.actions;
