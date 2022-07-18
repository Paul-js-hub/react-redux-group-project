import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const rocketsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = rocketsSlice.actions;
export default rocketsSlice.reducer;
