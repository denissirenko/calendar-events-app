import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const currentDay = dayjs().format('DD-MM-YY');

const initialState = {
  value: currentDay,
};

export const currentDaySlice = createSlice({
  name: 'currentDay',
  initialState,
  reducers: {
    setCurrentDay: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentDay } = currentDaySlice.actions;
export const selectCurrentDaySlice = (state) => state.selectedDay.value;

export default currentDaySlice.reducer;
