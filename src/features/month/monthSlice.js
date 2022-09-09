import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const monthIndex = dayjs().month();

const initialState = {
  value: monthIndex,
};

export const monthSlice = createSlice({
  name: 'month',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = monthSlice.actions;
export const selectMonth = (state) => state.month.value;

export default monthSlice.reducer;
