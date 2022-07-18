import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const missionsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = missionsSlice.actions;
export default missionsSlice.reducer;
