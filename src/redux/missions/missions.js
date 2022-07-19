import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk('missons/getMissions', async () => {
  const response = await axios.get(url);
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    isMember: false,
    pending: null,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getMissions.pending]: (state) => {
      const newState = state;
      newState.pending = true;
      newState.error = false;
    },
    [getMissions.fulfilled]: (state, action) => {
      const newState = state;
      newState.missions = action.payload;
      newState.pending = false;
    },
    [getMissions.rejected]: (state) => {
      const newState = state;
      newState.pending = false;
      newState.error = true;
    },
  },
});

export const { increment, decrement, incrementByAmount } = missionsSlice.actions;
export default missionsSlice.reducer;
