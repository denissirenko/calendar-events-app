import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const selectedEventSlice = createSlice({
  name: 'selectedEvent',
  initialState,
  reducers: {
    setSelectedEvent: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedEvent } = selectedEventSlice.actions;
export const selectSelectedEventSlice = (state) => state.selectedEvent.value;

export default selectedEventSlice.reducer;
