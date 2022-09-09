import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const saveEventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    update: (state, action) => {
      state.value = state.value.map((event) =>
        event.id === action.payload.id ? action.payload : event,
      );
    },
    remove: (state, action) => {
      state.value = state.value.filter((event) => event.id !== action.payload.id);
    },
  },
});

export const { add, update, remove } = saveEventsSlice.actions;
export const selectEventsSlice = (state) => state.events.value;

export default saveEventsSlice.reducer;
